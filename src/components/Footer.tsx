import { FileText, Github, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg gradient-primary">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Scribe IntelliScan</h3>
                <p className="text-sm text-muted-foreground">AI-Powered Document Digitization</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform handwritten documents into editable, searchable digital content with 
              our advanced AI technology. Trusted by healthcare, education, and government institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">OCR Technology</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">AI Extraction</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Data Storage</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Export Options</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Security</a></li>
            </ul>
          </div>
          
          {/* Use Cases */}
          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Healthcare</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Education</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Legal</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Banking</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Government</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Scribe IntelliScan. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};