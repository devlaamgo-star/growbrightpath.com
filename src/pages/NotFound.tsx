import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, BookOpen, HelpCircle, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Hero Section */}
          <div className="mb-12">
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    Oops! Page Not Found
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                    The page you're looking for seems to have wandered off into the digital wilderness. 
                    Let's get you back on track!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Go Home
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Return to our homepage and start fresh
                </p>
                <Button asChild className="w-full bg-gradient-primary text-white">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Home Page
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Search className="w-12 h-12 text-secondary-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Explore Features
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Discover what BrightPath Digital offers
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/features">
                    <Search className="w-4 h-4 mr-2" />
                    View Features
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
              <CardContent className="p-6 text-center">
                <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Get Help
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact our support team for assistance
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Popular Pages */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button asChild variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link to="/teachers">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span className="text-sm">For Teachers</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link to="/students">
                  <BookOpen className="w-6 h-6 text-secondary-accent" />
                  <span className="text-sm">For Students</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link to="/families">
                  <BookOpen className="w-6 h-6 text-accent" />
                  <span className="text-sm">For Families</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Link to="/pricing">
                  <BookOpen className="w-6 h-6 text-warning" />
                  <span className="text-sm">Pricing</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Go Back Button */}
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="border-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
