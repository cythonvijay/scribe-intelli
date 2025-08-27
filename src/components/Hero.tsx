import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Trusted by 450+ Enterprise Clients</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Handwritten
            <br />
            <span className="text-primary">Documents to Digital</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade AI OCR and information extraction that converts handwritten notes, prescriptions, 
            and forms into searchable digital content with <strong>97.3% accuracy</strong>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group text-base">
              <FileText className="h-5 w-5 mr-2" />
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Schedule Demo
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="AI Document Digitization Technology" 
              className="relative rounded-xl shadow-elegant w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 gradient-primary rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}} />
    </section>
  );
};