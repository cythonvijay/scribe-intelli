import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, Zap, Crown, Building2, ArrowLeft } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  buttonText: string;
  buttonVariant: "default" | "hero" | "outline";
}

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        '50 documents per month',
        'Basic OCR processing',
        'Standard accuracy (95%)',
        'Email support',
        'PDF & Image formats',
        '7-day processing history'
      ],
      icon: <Zap className="h-6 w-6" />,
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for businesses and teams',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        '500 documents per month',
        'Advanced OCR processing',
        'High accuracy (97.5%)',
        'Priority support',
        'All file formats',
        '30-day processing history',
        'API access',
        'Batch processing',
        'Custom workflows'
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      buttonText: 'Choose Professional',
      buttonVariant: 'hero'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited documents',
        'Enterprise OCR suite',
        'Maximum accuracy (99%)',
        '24/7 dedicated support',
        'All formats + custom',
        'Unlimited history',
        'Full API suite',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      icon: <Building2 className="h-6 w-6" />,
      buttonText: 'Contact Sales',
      buttonVariant: 'default'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    if (planId === 'enterprise') {
      // For enterprise, show contact form
      navigate('/contact');
    } else {
      // For other plans, go to checkout
      navigate(`/checkout?plan=${planId}&billing=${isYearly ? 'yearly' : 'monthly'}`);
    }
  };

  const getPrice = (plan: PricingPlan) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: PricingPlan) => {
    if (!isYearly) return null;
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = monthlyTotal - plan.yearlyPrice;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return percentage;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your document processing workflow with our AI-powered OCR technology. 
            Start with a free trial and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Label htmlFor="billing-toggle" className={!isYearly ? 'text-foreground' : 'text-muted-foreground'}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-toggle" className={isYearly ? 'text-foreground' : 'text-muted-foreground'}>
              Yearly
            </Label>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save up to 25%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-elegant ring-2 ring-primary/10' 
                  : 'border-border hover:border-primary/50'
              } transition-smooth`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  {plan.icon}
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">${getPrice(plan)}</span>
                    <span className="text-muted-foreground ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && getSavings(plan) && (
                    <p className="text-sm text-success mt-1">
                      Save {getSavings(plan)}% with yearly billing
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.buttonVariant}
                  className="w-full"
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What file formats are supported?</h3>
              <p className="text-muted-foreground text-sm">
                We support PDF, JPG, PNG, TIFF, and many other common document formats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! All plans include a 14-day free trial with full access to features.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How accurate is the OCR?</h3>
              <p className="text-muted-foreground text-sm">
                Our AI achieves 95-99% accuracy depending on your plan and document quality.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                Large organization? Custom requirements? We offer tailored enterprise solutions 
                with dedicated support and on-premise deployment options.
              </p>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Contact Enterprise Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPlans;