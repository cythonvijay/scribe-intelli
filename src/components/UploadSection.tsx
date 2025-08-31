import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image (JPG, PNG).",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    setUploading(true);
    setProgress(0);
    setExtractedText("");

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64String = e.target?.result as string;
        
        // Update progress to 30%
        setProgress(30);

        try {
          // Call Gemini OCR function
          const { data, error } = await supabase.functions.invoke('ocr-gemini', {
            body: { image: base64String }
          });

          setProgress(70);

          if (error) throw error;

          if (data.success) {
            setExtractedText(data.text);
            setProgress(100);
            setUploading(false);
            toast({
              title: "OCR Complete!",
              description: "Text has been successfully extracted from your document.",
            });
          } else {
            throw new Error(data.error || 'OCR processing failed');
          }
        } catch (error) {
          console.error('OCR error:', error);
          setUploading(false);
          setProgress(0);
          toast({
            title: "Processing failed",
            description: error.message || "Failed to extract text from the image.",
            variant: "destructive",
          });
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('File reading error:', error);
      setUploading(false);
      setProgress(0);
      toast({
        title: "File processing failed",
        description: "Failed to process the uploaded file.",
        variant: "destructive",
      });
    }
  };

  const downloadText = () => {
    if (!extractedText) return;
    
    const element = document.createElement("a");
    const file = new Blob([extractedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `extracted-text-${uploadedFile?.name || 'document'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try It Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your handwritten document and experience our AI-powered digitization technology in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Document Upload</CardTitle>
              <CardDescription>
                Support for JPG and PNG files up to 10MB
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {!uploadedFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-smooth cursor-pointer ${
                    dragActive 
                      ? "border-primary bg-primary/10" 
                      : "border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {dragActive ? "Drop your file here" : "Drag & drop your document"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    or click to browse files
                  </p>
                  <Button variant="upload">
                    Choose File
                  </Button>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* File Info */}
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="flex-1">
                      <h4 className="font-medium">{uploadedFile.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    {progress === 100 ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : uploading ? (
                      <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
                    ) : null}
                  </div>

                  {/* Progress */}
                  {uploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {progress < 40 ? "Reading document..." : 
                         progress < 80 ? "Extracting text with AI..." : "Finalizing..."}
                      </span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  )}

                  {/* Results */}
                  {progress === 100 && extractedText && (
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-700 dark:text-green-300">
                            Text Extraction Complete
                          </span>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                          Your document has been successfully processed using AI-powered OCR.
                        </p>
                        <div className="max-h-48 overflow-y-auto bg-white dark:bg-gray-800 p-3 rounded border text-sm">
                          <pre className="whitespace-pre-wrap font-mono">{extractedText}</pre>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" onClick={downloadText}>
                          <Download className="h-4 w-4 mr-2" />
                          Download Text
                        </Button>
                        <Button variant="ghost" onClick={() => {
                          setUploadedFile(null);
                          setProgress(0);
                          setExtractedText("");
                        }}>
                          Upload Another
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};