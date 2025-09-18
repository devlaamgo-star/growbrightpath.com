import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HelpCircle, Clock, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      color: "text-primary",
      bgColor: "bg-primary/10",
      faqs: [
        {
          question: "How do I sign up for BrightPath Digital?",
          answer: "You can sign up for BrightPath Digital by clicking the 'Start Free Trial' button on our homepage. You'll need to provide your name, email, school information, and role. No credit card is required for the 30-day free trial."
        },
        {
          question: "What's included in the free trial?",
          answer: "The 30-day free trial includes access to all Professional plan features: up to 150 students, advanced portfolio tools, real-time communication, assessment tools, detailed analytics, and priority email support. You can explore all features without any limitations."
        },
        {
          question: "How long does it take to set up my account?",
          answer: "Setting up your BrightPath Digital account takes less than 5 minutes. Once you complete the registration, you can immediately start creating student portfolios, setting up your classroom, and inviting families to connect."
        },
        {
          question: "Can I import existing student data?",
          answer: "Yes! BrightPath Digital supports data import from Excel/CSV files and integrates with popular Student Information Systems like PowerSchool and SIMS. Our support team can help you with the data migration process."
        }
      ]
    },
    {
      category: "Billing & Pricing",
      color: "text-secondary-accent", 
      bgColor: "bg-secondary-accent/10",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), bank transfers, purchase orders for annual subscriptions, and digital wallets (Apple Pay, Google Pay, PayPal). All payments are processed securely."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle. Pro-rated billing applies for mid-cycle changes."
        },
        {
          question: "Do you offer discounts for schools and districts?",
          answer: "Yes, we offer special pricing for schools, districts, and Multi-Academy Trusts. Volume discounts are available for large implementations. Contact our sales team for custom pricing and bulk discounts."
        },
        {
          question: "What happens if I cancel my subscription?",
          answer: "You can cancel your subscription at any time. Your account will remain active until the end of your current billing period. You can export all your data before cancellation. We also offer a 30-day money-back guarantee for new subscribers."
        }
      ]
    },
    {
      category: "Features & Functionality",
      color: "text-accent",
      bgColor: "bg-accent/10", 
      faqs: [
        {
          question: "How do digital portfolios work?",
          answer: "Digital portfolios are online collections of student work, progress, and achievements. Students and teachers can add photos, videos, documents, and reflections. Families can view portfolios in real-time and leave encouraging comments on their child's work."
        },
        {
          question: "Can families access portfolios on mobile devices?",
          answer: "Absolutely! BrightPath Digital is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android that provide a seamless experience for families to view portfolios and receive updates."
        },
        {
          question: "How does family communication work?",
          answer: "Teachers can send instant messages, photos, and updates to individual families or groups. Families receive notifications via email and mobile app. The platform includes translation features for non-English speaking families."
        },
        {
          question: "What curriculum alignment is available?",
          answer: "BrightPath Digital aligns with Canadian provincial curricula, as well as international standards. Our resource library includes pre-built activities and assessment rubrics aligned with curriculum expectations for different grade levels."
        }
      ]
    },
    {
      category: "Privacy & Security",
      color: "text-warning",
      bgColor: "bg-warning/10",
      faqs: [
        {
          question: "How is student data protected?",
          answer: "We take student privacy seriously. All data is encrypted in transit and at rest, stored on secure Canada-based servers. We're PIPEDA and FERPA compliant, never sell student data, and maintain strict access controls with detailed audit logs."
        },
        {
          question: "Who can access student portfolios?",
          answer: "Only authorized users can access student portfolios: the student's teachers, the student themselves (age-appropriate), and their parents/guardians. School administrators may have access based on your school's settings. All access is logged and monitored."
        },
        {
          question: "Can parents control what information is shared?",
          answer: "Yes, parents have control over their family's privacy settings. They can choose notification preferences, visibility settings, and can request data deletion. Students' personally identifiable information is always protected."
        },
        {
          question: "What happens to data if we stop using the service?",
          answer: "You can export all your data at any time. If you cancel your subscription, data is retained for 90 days to allow for reactivation, then securely deleted. We provide data export tools and assistance with the transition process."
        }
      ]
    },
    {
      category: "Technical Support",
      color: "text-primary",
      bgColor: "bg-primary/10",
      faqs: [
        {
          question: "What support is available?",
          answer: "We offer multiple support channels: email support (24-hour response time), live chat during business hours, phone support for Professional+ plans, comprehensive help documentation, video tutorials, and webinar training sessions."
        },
        {
          question: "Do you provide training for teachers?",
          answer: "Yes! We offer free onboarding webinars, video tutorials, step-by-step guides, and personalized training sessions for schools. Our education specialists can provide customized training based on your school's needs."
        },
        {
          question: "What if I encounter technical issues?",
          answer: "Our technical support team is here to help. You can contact us via email, live chat, or phone. Most issues are resolved within a few hours. We also have a comprehensive troubleshooting guide and community forum."
        },
        {
          question: "Are there system requirements?",
          answer: "BrightPath Digital works on any device with a modern web browser (Chrome, Firefox, Safari, Edge). No special software installation required. Mobile apps are available for iOS 12+ and Android 8+. Stable internet connection recommended."
        }
      ]
    },
    {
      category: "Integrations",
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      faqs: [
        {
          question: "What systems can BrightPath Digital integrate with?",
          answer: "We integrate with 50+ educational tools including Google Workspace, Microsoft 365, Canvas, Moodle, PowerSchool, SIMS, Zoom, Teams, and many more. Check our integrations page for the complete list."
        },
        {
          question: "How difficult is it to set up integrations?",
          answer: "Most integrations can be set up in 5-20 minutes using our guided setup process. We provide step-by-step instructions and our support team can assist with more complex integrations like SIS connections."
        },
        {
          question: "Can you create custom integrations?",
          answer: "Yes! We offer custom integration development for enterprise clients. Our REST API and webhook system make it possible to connect with virtually any platform. Contact our technical team to discuss your specific needs."
        },
        {
          question: "Do integrations cost extra?",
          answer: "Basic integrations are included with all paid plans. Some advanced enterprise integrations may require additional setup fees. Custom integration development is available for enterprise clients at additional cost."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Get Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Questions Answered</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find quick answers to common questions about BrightPath Digital.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={category.category}>
                  <div className="text-center mb-8">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <HelpCircle className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const globalIndex = categoryIndex * 100 + index;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <Card key={index} className="shadow-soft border-border bg-gradient-card">
                          <CardHeader 
                            className="cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-left text-lg font-semibold text-foreground">
                                {faq.question}
                              </CardTitle>
                              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </CardHeader>
                          {isOpen && (
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or browse the categories above.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Still Need Help Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Contact Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get help from our friendly support team
                  </p>
                  <Button className="bg-gradient-primary text-white">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-secondary-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-secondary-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Schedule a Demo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    See BrightPath Digital in action
                  </p>
                  <Button variant="outline" className="border-2">
                    Book Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;