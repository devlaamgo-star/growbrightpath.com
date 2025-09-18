import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  X, 
  Star, 
  Users, 
  School, 
  Building,
  Zap,
  Shield,
  HeadphonesIcon,
  Infinity,
  Crown
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual teachers",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        { name: "Up to 30 students", included: true },
        { name: "Basic portfolio creation", included: true },
        { name: "Family communication", included: true },
        { name: "Mobile app access", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Advanced features", included: false },
        { name: "Priority support", included: false },
        { name: "Custom branding", included: false },
        { name: "Advanced analytics", included: false }
      ]
    },
    {
      name: "Professional",
      description: "Ideal for teachers and small schools",
      icon: School,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      monthlyPrice: 12,
      annualPrice: 120,
      popular: true,
      features: [
        { name: "Up to 150 students", included: true },
        { name: "Advanced portfolio tools", included: true },
        { name: "Real-time communication", included: true },
        { name: "Assessment tools", included: true },
        { name: "Detailed analytics", included: true },
        { name: "Priority email support", included: true },
        { name: "Video conferencing", included: true },
        { name: "Curriculum alignment", included: true },
        { name: "Basic integrations", included: true },
        { name: "Custom branding", included: false }
      ]
    },
    {
      name: "School",
      description: "Complete solution for schools",
      icon: Building,
      color: "text-accent",
      bgColor: "bg-accent/10",
      monthlyPrice: 35,
      annualPrice: 350,
      popular: false,
      features: [
        { name: "Unlimited students", included: true },
        { name: "All portfolio features", included: true },
        { name: "Advanced communication", included: true },
        { name: "Comprehensive assessments", included: true },
        { name: "School-wide analytics", included: true },
        { name: "Phone & email support", included: true },
        { name: "All integrations", included: true },
        { name: "Custom branding", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Training & onboarding", included: true }
      ]
    },
    {
      name: "Enterprise",
      description: "For districts and large organizations",
      icon: Crown,
      color: "text-warning",
      bgColor: "bg-warning/10",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: [
        { name: "Multi-school management", included: true },
        { name: "Enterprise security", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced analytics suite", included: true },
        { name: "Dedicated support team", included: true },
        { name: "SLA guarantee", included: true },
        { name: "On-premise deployment", included: true },
        { name: "Custom training program", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: true }
      ]
    }
  ];

  const addOns = [
    {
      name: "Premium Analytics",
      description: "Advanced reporting and insights",
      price: 5,
      icon: Zap
    },
    {
      name: "Enhanced Security",
      description: "Additional security features",
      price: 8,
      icon: Shield
    },
    {
      name: "Priority Support",
      description: "24/7 phone and chat support",
      price: 10,
      icon: HeadphonesIcon
    }
  ];

  const calculatePrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return "Custom";
    if (plan.monthlyPrice === 0) return "Free";
    
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const period = isAnnual ? "/year" : "/month";
    const savings = isAnnual && plan.monthlyPrice > 0 ? Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100) : 0;
    
    return (
      <div>
        <span className="text-3xl font-bold">£{price}</span>
        <span className="text-muted-foreground">{period}</span>
        {savings > 0 && (
          <div className="text-sm text-accent font-medium">Save {savings}%</div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Simple Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Plans That Grow 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> With You</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Choose the perfect plan for your educational needs. Start free and upgrade as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <Badge className="bg-accent/10 text-accent">Save up to 17%</Badge>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <div className="pt-4">
                      {calculatePrice(plan)}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-primary text-white shadow-medium hover:shadow-large' 
                            : plan.monthlyPrice === 0 
                              ? 'bg-gradient-success text-white' 
                              : ''
                        }`}
                        variant={plan.popular ? "default" : plan.monthlyPrice === 0 ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link to={plan.monthlyPrice === null ? "/contact" : "/demo"}>
                          {plan.monthlyPrice === null ? "Contact Sales" : 
                           plan.monthlyPrice === 0 ? "Start Free" : "Start Trial"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Optional Add-ons
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance your plan with additional features and support options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon) => (
                <Card key={addon.name} className="text-center shadow-soft border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <addon.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {addon.description}
                    </p>
                    <div className="text-2xl font-bold text-foreground">
                      £{addon.price}<span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
                },
                {
                  question: "Is there a free trial?",
                  answer: "Yes! All paid plans come with a 30-day free trial. No credit card required to start. The Starter plan is free forever for up to 30 students."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, bank transfers, and purchase orders for annual plans. All payments are processed securely."
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We're GDPR compliant with enterprise-grade security, including data encryption, regular backups, and secure Canada-based servers."
                },
                {
                  question: "Do you offer discounts for charities or MATs?",
                  answer: "Yes, we offer special pricing for registered charities and Multi-Academy Trusts. Contact our sales team for custom pricing."
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-soft border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Canadian educators who have chosen BrightPath Digital. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;