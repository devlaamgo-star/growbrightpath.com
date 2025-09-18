import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SuccessPopup } from "@/components/ui/success-popup";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { CheckCircle, Play, Users, BookOpen, Award } from "lucide-react";
import { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    school: ""
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role || !formData.school) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setCountdown(5);

    // Create fake HTTPS POST request
    try {
      const response = await fetch('https://api.growbrightpath.com/v1/demo/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token-12345',
          'X-API-Version': '1.0'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          role: formData.role,
          school: formData.school,
          timestamp: new Date().toISOString(),
          source: 'demo_page'
        })
      });
    } catch (error) {
      // Expected to fail since it's a fake endpoint
      console.log('Demo submission processed');
    }

    // 5-second countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitting(false);
          setShowPopup(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            school: ""
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const productData = {
    name: "BrightPath Digital - Free Trial",
    description: "Start your 30-day free trial of BrightPath Digital's comprehensive educational platform. No credit card required.",
    brand: "BrightPath Digital",
    offers: {
      price: "0.00",
      currency: "GBP",
      availability: "InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Trial - Start Your BrightPath Digital Journey | No Credit Card Required"
        description="Experience BrightPath Digital's full educational platform with our 30-day free trial. Access all features, student portfolios, family engagement tools, and more. Start transforming your classroom today."
        keywords="free trial, educational platform, teacher tools, student portfolios, classroom management, digital learning, UK education technology"
        url="/demo"
        type="product"
      />

      <StructuredData
        type="product"
        data={productData}
      />

      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of digital education with our comprehensive learning platform. 
            No credit card required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Video/Preview Section */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-primary relative rounded-t-lg flex items-center justify-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <Play className="w-6 h-6 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">See BrightPath in Action</h3>
                <p className="text-muted-foreground">
                  Watch how educators are transforming their classrooms with our interactive learning tools.
                </p>
              </CardContent>
            </Card>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">10,000+</h4>
                    <p className="text-sm text-muted-foreground">Active Teachers</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-muted-foreground">Learning Modules</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sign Up Form */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription>
                Join thousands of educators already using BrightPath Digital
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-0 pb-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">I am a... *</Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="parent">Parent/Guardian</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">School/Organization *</Label>
                  <Input
                    id="school"
                    placeholder="Enter your school name"
                    value={formData.school}
                    onChange={(e) => handleInputChange("school", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      30-day free trial with full access to all features
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      No credit card required
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Cancel anytime during trial period
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white shadow-soft hover:shadow-medium text-lg py-6 disabled:opacity-70"
                >
                  {isSubmitting ? `Processing... ${countdown}s` : "Start Free Trial"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Trusted by Leading Educational Institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="h-12 bg-muted rounded flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <div className="h-12 bg-muted rounded flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="h-12 bg-muted rounded flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div className="h-12 bg-muted rounded flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
          </div>
        </div>
      </main>

      <SuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Registration Successful!"
        message="Welcome to BrightPath Digital! Your free trial account has been created. Check your email for next steps and start exploring our innovative learning platform."
        actionText="Start Exploring"
        onAction={() => {
          setShowPopup(false);
          // Could navigate to dashboard or demo
        }}
      />

      <Footer />
    </div>
  );
};

export default Demo;