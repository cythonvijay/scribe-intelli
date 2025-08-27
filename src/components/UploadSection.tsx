import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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
    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload an image (JPG, PNG) or PDF file.",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    setUploading(true);
    setProgress(0);

    // Simulate processing progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Upload successful!",
            description: "Your document has been processed and is ready for extraction.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleBackendNote = () => {
    toast({
      title: "Backend Integration Required",
      description: "Connect to Supabase to enable full OCR processing and data storage capabilities.",
      variant: "destructive",
    });
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
                Support for JPG, PNG, and PDF files up to 10MB
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
                    accept="image/*,.pdf"
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
                        <span>Processing document...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  {/* Results */}
                  {progress === 100 && (
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-700 dark:text-green-300">
                            Processing Complete
                          </span>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Your document has been successfully digitized. Connect backend to view full results.
                        </p>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="ai" onClick={handleBackendNote}>
                          View Results
                        </Button>
                        <Button variant="outline" onClick={handleBackendNote}>
                          Download Text
                        </Button>
                        <Button variant="ghost" onClick={() => {
                          setUploadedFile(null);
                          setProgress(0);
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

          {/* Backend Integration Notice */}
          <Card className="mt-8 border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Full Functionality Requires Backend Integration
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    To enable complete OCR processing, information extraction, and database storage, 
                    connect your project to Supabase using the integration button above.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};