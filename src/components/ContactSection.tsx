import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SuccessPopup } from "@/components/ui/success-popup";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    role: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setCountdown(5);

    // Create fake HTTPS POST request
    try {
      const response = await fetch('https://api.growbrightpath.com/v1/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token-12345',
          'X-API-Version': '1.0',
          'X-Contact-Source': 'website'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          school: formData.school,
          role: formData.role,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'contact_page',
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      // Expected to fail since it's a fake endpoint
      console.log('Contact form submitted');
    }

    // 5-second countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitting(false);
          setShowPopup(true);
          setFormData({
            name: "",
            email: "",
            school: "",
            role: "",
            message: ""
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Transform
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Your Classroom?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your free trial today or get in touch with our education specialists to learn how BrightPath Digital can benefit your school.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="shadow-soft border-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">director@growbrightpath.com</p>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Phone className="w-5 h-5 text-secondary-accent" />
                  <span>Call Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+44 7537 181554</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM GMT</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Visit Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">105 Southwood Rd</p>
                <p className="text-muted-foreground mb-2">London SE9 3QH</p>
                <p className="text-sm text-muted-foreground">United Kingdom</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Clock className="w-5 h-5 text-warning" />
                  <span>Demo Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Live demos available</p>
                <p className="text-sm text-muted-foreground">Book a personalized session</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="shadow-large border-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Get Started Today
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your school and we'll help you get set up with BrightPath Digital.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">School/Organization</label>
                      <Input
                        value={formData.school}
                        onChange={(e) => handleInputChange("school", e.target.value)}
                        placeholder="School name"
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Role</label>
                      <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="it-coordinator">IT Coordinator</SelectItem>
                          <SelectItem value="headteacher">Headteacher</SelectItem>
                          <SelectItem value="parent">Parent/Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your needs and how we can help..."
                      rows={4}
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-gradient-primary text-white shadow-soft hover:shadow-medium transition-all duration-300 group flex-1 disabled:opacity-70"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? `Sending... ${countdown}s` : "Send Message"}
                    </Button>
                    
                    <Button 
                      type="button" 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      asChild
                    >
                      <Link to="/schedule-demo">Schedule Demo</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title="Message Sent Successfully!"
          message="Thank you for reaching out! Our education specialists have received your message and will respond within 24 hours. We look forward to helping you transform your learning environment."
          actionText="Schedule Demo"
          onAction={() => {
            setShowPopup(false);
            // Could navigate to schedule demo page
          }}
        />
      </div>
    </section>
  );
};

export default ContactSection;