import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SuccessPopup } from "@/components/ui/success-popup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Search,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  FileText,
  Video,
  Users,
  Settings,
  Shield,
  CreditCard,
  Smartphone,
  Download,
  ChevronRight
} from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [lastSearchQuery, setLastSearchQuery] = useState("");

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      alert("Please enter a search term");
      return;
    }

    setIsSubmitting(true);
    setCountdown(5);
    setLastSearchQuery(searchQuery);

    // Create fake HTTPS POST request
    try {
      const response = await fetch('https://api.growbrightpath.com/v1/support/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token-12345',
          'X-API-Version': '1.0',
          'X-Search-Source': 'help_center'
        },
        body: JSON.stringify({
          query: searchQuery,
          timestamp: new Date().toISOString(),
          source: 'support_page',
          category: 'help_search',
          userSession: Math.random().toString(36).substring(7)
        })
      });
    } catch (error) {
      // Expected to fail since it's a fake endpoint
      console.log('Search query processed');
    }

    // 5-second countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitting(false);
          setShowPopup(true);
          setSearchQuery("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const popularArticles = [
    {
      title: "Getting Started with BrightPath Digital",
      description: "Complete guide to setting up your account and creating your first portfolio",
      category: "Getting Started",
      readTime: "5 min read",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Creating Student Portfolios",
      description: "Step-by-step instructions for building engaging digital portfolios",
      category: "Portfolios",
      readTime: "8 min read",
      icon: FileText,
      color: "text-secondary-accent"
    },
    {
      title: "Family Communication Tools",
      description: "How to keep families engaged with real-time updates and messaging",
      category: "Communication",
      readTime: "6 min read",
      icon: MessageSquare,
      color: "text-accent"
    },
    {
      title: "Assessment & Progress Tracking",
      description: "Using analytics and reports to monitor student development",
      category: "Assessment",
      readTime: "7 min read",
      icon: CheckCircle2,
      color: "text-warning"
    },
    {
      title: "Mobile App Setup",
      description: "Download and configure the BrightPath mobile app",
      category: "Mobile",
      readTime: "4 min read",
      icon: Smartphone,
      color: "text-primary"
    },
    {
      title: "Privacy & Security Settings",
      description: "Manage data protection and security preferences",
      category: "Security",
      readTime: "5 min read",
      icon: Shield,
      color: "text-secondary-accent"
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "New to BrightPath? Start here",
      icon: BookOpen,
      articles: 12,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Student Portfolios",
      description: "Create and manage digital portfolios",
      icon: FileText,
      articles: 18,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10"
    },
    {
      title: "Family Engagement",
      description: "Connect with families effectively",
      icon: Users,
      articles: 15,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Assessment Tools",
      description: "Track progress and create reports",
      icon: CheckCircle2,
      articles: 22,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Account & Billing",
      description: "Manage your subscription and payments",
      icon: CreditCard,
      articles: 8,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      icon: Settings,
      articles: 14,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10"
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 9am-6pm GMT",
      icon: MessageSquare,
      action: "Start Chat",
      primary: true
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      icon: Mail,
      action: "Send Email",
      primary: false
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Available for Professional+ plans",
      icon: Phone,
      action: "Call Now",
      primary: false
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      availability: "Available 24/7",
      icon: Video,
      action: "Watch Now",
      primary: false
    }
  ];

  const faqData = [
    {
      question: "How do I create a student portfolio?",
      answer: "Navigate to the Portfolios section, click 'Create New Portfolio', and follow the step-by-step wizard to add content, images, and achievements."
    },
    {
      question: "Can families access student progress?",
      answer: "Yes, families receive real-time updates and can access a dedicated family portal to view their child's progress, achievements, and portfolio updates."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, BrightPath Digital offers mobile apps for both iOS and Android, allowing access to portfolios and communications on the go."
    },
    {
      question: "How do I troubleshoot login issues?",
      answer: "Try clearing your browser cache, check your credentials, or use the password reset option. Contact support if issues persist."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Support & Help Center - BrightPath Digital | Educational Technology Support"
        description="Get help with BrightPath Digital. Access tutorials, guides, live chat support, and resources for educators. Comprehensive help center available 24/7."
        keywords="educational technology support, teacher help center, digital portfolio help, BrightPath support, education platform tutorials, UK EdTech support"
        url="/support"
        type="website"
      />

      <StructuredData
        type="faq"
        data={faqData}
      />

      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              How Can We 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Help You?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers, get support, and make the most of BrightPath Digital with our comprehensive help center.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isSubmitting ? `Searching... ${countdown}s` : "Search for help articles, guides, and tutorials..."}
                className="pl-12 pr-32 py-4 text-lg border-2 rounded-xl"
                disabled={isSubmitting}
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting || !searchQuery.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-70"
              >
                {isSubmitting ? `${countdown}s` : "Search"}
              </Button>
            </form>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Get Support Your Way
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the support option that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option) => (
                <Card 
                  key={option.title} 
                  className={`text-center shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300 ${
                    option.primary ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${option.primary ? 'bg-primary text-white' : 'bg-primary/10'} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <option.icon className={`w-6 h-6 ${option.primary ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {option.description}
                    </p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {option.availability}
                    </div>
                    <Button 
                      className={`w-full ${option.primary ? 'bg-gradient-primary text-white' : ''}`}
                      variant={option.primary ? "default" : "outline"}
                      size="sm"
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-muted-foreground">
                Find help articles organized by topic and feature area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.title} className="shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-semibold text-lg text-foreground">
                            {category.title}
                          </h3>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {category.description}
                        </p>
                        <div className="text-xs text-muted-foreground">
                          {category.articles} articles
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Popular Help Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                The most helpful guides and tutorials from our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 ${article.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <article.icon className={`w-5 h-5 ${article.color}`} />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 text-xs" variant="secondary">
                          {article.category}
                        </Badge>
                        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {article.description}
                        </p>
                        <div className="text-xs text-muted-foreground">
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore more ways to get the most out of BrightPath Digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft border-border bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Download Resources
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Access user guides, quick reference cards, and training materials.
                  </p>
                  <Button variant="outline" size="sm">
                    View Downloads
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-secondary-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Community Forum
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect with other educators and share best practices.
                  </p>
                  <Button variant="outline" size="sm">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is here to help you succeed with BrightPath Digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title="Search Completed!"
          message={`We've searched our knowledge base for "${lastSearchQuery}". Here are the most relevant help articles and resources we found to assist you.`}
          actionText="Browse Articles"
          onAction={() => {
            setShowPopup(false);
            // Could navigate to search results
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Support;