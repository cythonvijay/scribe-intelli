import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Scribe IntelliScan has transformed our patient records management. We've reduced transcription time by 85% and improved accuracy significantly.",
    author: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    company: "Metropolitan Health System",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The AI extraction capabilities are incredible. It perfectly identifies key information from handwritten legal documents, saving our team hours of manual work.",
    author: "Michael Rodriguez",
    title: "Legal Operations Director", 
    company: "Morrison & Associates Law",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "As an educator, I love how it digitizes student assignments and extracts important information automatically. The accuracy is remarkable.",
    author: "Prof. Emily Watson",
    title: "Department Head",
    company: "Stanford University",
    rating: 5,
    avatar: "EW"
  }
];

const stats = [
  { label: "Documents Processed", value: "2.4M+" },
  { label: "Accuracy Rate", value: "97.3%" },
  { label: "Time Saved", value: "85%" },
  { label: "Enterprise Clients", value: "450+" }
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of organizations already transforming their document workflows with our AI technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </CardDescription>
                <Badge variant="secondary" className="text-xs">
                  {testimonial.company}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto shadow-card border-0 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Document Workflow?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join industry leaders who have already digitized millions of documents with 97%+ accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};