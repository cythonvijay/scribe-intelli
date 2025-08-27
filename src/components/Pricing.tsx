import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Users } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams and individual professionals",
    badge: null,
    features: [
      "100 documents/month",
      "Basic OCR processing",
      "Standard accuracy (92%+)",
      "PDF & image support",
      "Email support",
      "Basic data export"
    ],
    cta: "Start Free Trial",
    variant: "outline" as const
  },
  {
    name: "Professional", 
    price: "$89",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    badge: "Most Popular",
    features: [
      "1,000 documents/month", 
      "Advanced OCR + AI extraction",
      "High accuracy (95%+)",
      "All file formats",
      "Priority support",
      "Advanced exports",
      "API access",
      "Custom workflows"
    ],
    cta: "Start Free Trial",
    variant: "hero" as const
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    badge: null,
    features: [
      "Unlimited documents",
      "Premium AI models",
      "Maximum accuracy (97%+)",
      "Custom integrations",
      "Dedicated support",
      "On-premise deployment",
      "Custom training",
      "SLA guarantee"
    ],
    cta: "Contact Sales",
    variant: "outline" as const
  }
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process documents in seconds, not hours"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share and collaborate on digitized documents"
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI technology 
            with varying limits and features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-card hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm relative ${plan.badge ? 'ring-2 ring-primary' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-medium px-3 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-center mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6">
                  <Button 
                    variant={plan.variant} 
                    className="w-full" 
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We work with enterprise clients to create tailored solutions that meet 
              specific compliance, security, and integration requirements.
            </p>
            <Button variant="outline" size="lg">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};