import { Button } from "@/components/ui/button";
import { FileText, Menu, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg gradient-primary">
            <FileText className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Scribe IntelliScan</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Document Digitization</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
            How it Works
          </a>
          <a href="#upload" className="text-muted-foreground hover:text-foreground transition-smooth">
            Upload
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ai" size="sm" className="hidden sm:flex">
            <Zap className="h-4 w-4" />
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};