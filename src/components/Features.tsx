import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Database, Download, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Advanced OCR Technology",
    description: "State-of-the-art optical character recognition that handles various handwriting styles with exceptional accuracy.",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "AI Information Extraction",
    description: "Intelligent NLP algorithms identify and extract key information like names, dates, addresses, and reference IDs.",
    color: "text-purple-500"
  },
  {
    icon: Database,
    title: "Structured Data Storage",
    description: "Automatically organize extracted information into searchable databases for easy retrieval and management.",
    color: "text-indigo-500"
  },
  {
    icon: Download,
    title: "Multiple Export Formats",
    description: "Export your digitized content to TXT, DOCX, CSV, or PDF formats for seamless integration with your workflow.",
    color: "text-cyan-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and privacy protection ensure your sensitive documents remain secure throughout processing.",
    color: "text-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Process documents in seconds, not hours. Our optimized AI models deliver results at unprecedented speed.",
    color: "text-yellow-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for 
            <span className="gradient-primary bg-clip-text text-transparent"> Modern Digitization</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform handles every aspect of document digitization, 
            from initial scanning to final data extraction and storage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group cursor-pointer border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};