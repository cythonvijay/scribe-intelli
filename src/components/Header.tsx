import { Button } from "@/components/ui/button";
import { FileText, Menu, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Scribe IntelliScan</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Document Digitization</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            How it Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
          <a href="#upload" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Try Demo
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex text-sm">
            Sign In
          </Button>
          <Button variant="default" size="sm" className="hidden sm:flex text-sm">
            <Zap className="h-4 w-4 mr-1" />
            Start Free Trial
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};