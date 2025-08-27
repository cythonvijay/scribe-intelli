import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, ScanLine, Brain, Download } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Document",
    description: "Simply drag and drop or upload your handwritten document images (JPG, PNG, PDF) through our secure interface."
  },
  {
    step: "02", 
    icon: ScanLine,
    title: "AI Processing",
    description: "Our advanced OCR engine processes your document with noise removal, skew correction, and intelligent text recognition."
  },
  {
    step: "03",
    icon: Brain,
    title: "Information Extraction", 
    description: "NLP algorithms identify and extract key information like names, dates, addresses, and other critical data points."
  },
  {
    step: "04",
    icon: Download,
    title: "Export & Store",
    description: "Download your digitized content in multiple formats or store it securely in our database for future access."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process transforms your handwritten documents into digital content in just four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 z-0" />
              )}
              
              <Card className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm relative z-10">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP {step.step}</div>
                  <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};