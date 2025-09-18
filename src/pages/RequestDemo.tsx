import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Send,
  CheckCircle2,
  Users,
  School,
  Building,
  Clock,
  Video,
  Mail,
  Phone,
  MessageSquare,
  Star,
  Shield,
  Zap,
  Target
} from "lucide-react";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    role: "",
    studentCount: "",
    currentSolution: "",
    timeline: "",
    interests: [],
    message: "",
    newsletter: false
  });

  const demoFeatures = [
    {
      icon: Users,
      title: "Personalized Walkthrough",
      description: "See how BrightPath works with your specific teaching context"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your schedule"
    },
    {
      icon: Target,
      title: "Tailored to Your Needs",
      description: "Focus on features most relevant to your educational goals"
    },
    {
      icon: Shield,
      title: "No Commitment Required",
      description: "Explore all features risk-free with no obligations"
    }
  ];

  const interestOptions = [
    "Digital portfolios",
    "Family communication",
    "Assessment tools",
    "Progress tracking",
    "Curriculum alignment",
    "Mobile app access",
    "School-wide implementation",
    "Training and support"
  ];

  const benefits = [
    {
      title: "See Real Results",
      description: "View actual student portfolios and family engagement data from Canadian schools",
      icon: CheckCircle2,
      color: "text-accent"
    },
    {
      title: "Expert Guidance",
      description: "Get advice from education specialists who understand your challenges",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Implementation Planning",
      description: "Discuss rollout strategies and training plans for your school",
      icon: School,
      color: "text-secondary-accent"
    }
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Demo Request
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Request Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Personal Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover how BrightPath Digital can transform your teaching experience. Request a personalized demo tailored to your school's needs.
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30 Min</div>
                <div className="text-sm text-muted-foreground">Demo Length</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-accent">100% Free</div>
                <div className="text-sm text-muted-foreground">No Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Custom</div>
                <div className="text-sm text-muted-foreground">Tailored Demo</div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                What You'll Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Our demos are designed to show you exactly how BrightPath fits your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-large border-border bg-gradient-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Request Your Demo
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll be in touch within 24 hours to schedule your personalized demo.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@school.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolName">School/Organization *</Label>
                  <Input
                    id="schoolName"
                    placeholder="Enter your school or organization name"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="head-teacher">Head Teacher</SelectItem>
                        <SelectItem value="deputy-head">Deputy Head Teacher</SelectItem>
                        <SelectItem value="ict-coordinator">ICT Coordinator</SelectItem>
                        <SelectItem value="senco">SENCO</SelectItem>
                        <SelectItem value="administrator">School Administrator</SelectItem>
                        <SelectItem value="governor">School Governor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="studentCount">Number of Students</Label>
                    <Select value={formData.studentCount} onValueChange={(value) => setFormData({...formData, studentCount: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select student count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-30">1-30 students</SelectItem>
                        <SelectItem value="31-100">31-100 students</SelectItem>
                        <SelectItem value="101-300">101-300 students</SelectItem>
                        <SelectItem value="301-500">301-500 students</SelectItem>
                        <SelectItem value="500+">500+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentSolution">Current Solution</Label>
                    <Select value={formData.currentSolution} onValueChange={(value) => setFormData({...formData, currentSolution: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="What do you currently use?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No digital solution</SelectItem>
                        <SelectItem value="tapestry">Tapestry</SelectItem>
                        <SelectItem value="evidence-me">Evidence Me</SelectItem>
                        <SelectItem value="learning-journals">Learning Journals</SelectItem>
                        <SelectItem value="seesaw">Seesaw</SelectItem>
                        <SelectItem value="other">Other solution</SelectItem>
                        <SelectItem value="multiple">Multiple solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you implement?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="next-term">Next term</SelectItem>
                        <SelectItem value="next-academic-year">Next academic year</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="exploring">Just exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Areas of Interest (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm font-normal">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your specific needs, challenges, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                  />
                  <Label htmlFor="newsletter" className="text-sm font-normal">
                    I'd like to receive updates about BrightPath Digital features and education insights
                  </Label>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary text-white shadow-medium hover:shadow-large"
                  disabled={!formData.firstName || !formData.email || !formData.schoolName || !formData.role}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Demo
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We'll contact you within 24 hours to schedule your personalized demo
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Why Request a Demo?
              </h2>
              <p className="text-xl text-muted-foreground">
                See firsthand how BrightPath Digital can transform your teaching experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${benefit.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
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
              Ready to See BrightPath in Action?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Canadian educators who have transformed their teaching with BrightPath Digital.
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

export default RequestDemo;