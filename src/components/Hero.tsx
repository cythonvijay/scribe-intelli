import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, CheckCircle } from "lucide-react";
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">100% Free to Use</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Handwritten
            <br />
            <span className="text-primary">Documents to Digital</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your handwritten documents into digital text instantly with our advanced AI technology. 
            <strong className="text-primary"> Completely free</strong> - no subscriptions, no limits.
          </p>
          
          {/* Free Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">No Registration Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Converting Now
            </Button>
          </div>
          
          {/* Scroll Arrow */}
          <div className="mt-8 animate-bounce">
            <ArrowDown 
              className="h-6 w-6 text-muted-foreground mx-auto cursor-pointer" 
              onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
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