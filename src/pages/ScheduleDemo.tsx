import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { SuccessPopup } from "@/components/ui/success-popup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar as CalendarIcon,
  Clock,
  Users,
  Video,
  CheckCircle2,
  School,
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Star,
  Play
} from "lucide-react";

const ScheduleDemo = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    role: "",
    studentCount: "",
    interests: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.schoolName || !formData.role || !selectedDate || !selectedTime) {
      alert("Please fill in all required fields and select a date and time");
      return;
    }

    setIsSubmitting(true);
    setCountdown(5);

    // Create fake HTTPS POST request
    try {
      const response = await fetch('https://api.growbrightpath.com/v1/demo/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token-12345',
          'X-API-Version': '1.0',
          'X-Request-ID': Math.random().toString(36).substring(7)
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          schoolName: formData.schoolName,
          role: formData.role,
          studentCount: formData.studentCount,
          interests: formData.interests,
          selectedDate: selectedDate?.toISOString(),
          selectedTime: selectedTime,
          timestamp: new Date().toISOString(),
          source: 'schedule_demo_page'
        })
      });
    } catch (error) {
      // Expected to fail since it's a fake endpoint
      console.log('Demo booking processed');
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
            phone: "",
            schoolName: "",
            role: "",
            studentCount: "",
            interests: ""
          });
          setSelectedDate(undefined);
          setSelectedTime("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const demoTypes = [
    {
      title: "Standard Demo",
      duration: "30 minutes",
      description: "Perfect overview of BrightPath Digital's core features",
      features: ["Portfolio creation", "Family communication", "Basic analytics"],
      icon: Play,
      popular: false
    },
    {
      title: "Comprehensive Demo",
      duration: "45 minutes", 
      description: "In-depth walkthrough tailored to your specific needs",
      features: ["All platform features", "Implementation planning", "Q&A session"],
      icon: Video,
      popular: true
    },
    {
      title: "School Leadership Demo",
      duration: "60 minutes",
      description: "Strategic overview for decision makers and administrators", 
      features: ["ROI analysis", "Rollout planning", "Training discussion"],
      icon: School,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "See Real Student Work",
      description: "View actual portfolios and projects created by Canadian students"
    },
    {
      icon: Users,
      title: "Family Engagement Demo", 
      description: "Experience how families stay connected to learning"
    },
    {
      icon: Clock,
      title: "Time-Saving Features",
      description: "Discover tools that save teachers 10+ hours per week"
    }
  ];

  const serviceData = {
    name: "BrightPath Digital Demo",
    description: "Personalized demonstration of BrightPath Digital's educational technology platform for teachers and school administrators.",
    brand: "BrightPath Digital",
    offers: {
      price: "0",
      currency: "GBP",
      availability: "InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Schedule a Demo - BrightPath Digital | Educational Technology Demonstration"
        description="Book a free personalized demo of BrightPath Digital. See how our platform transforms education with portfolios, family engagement, and analytics. 30-minute sessions available."
        keywords="educational technology demo, BrightPath demo booking, teacher platform demonstration, UK education software demo, digital portfolio demo"
        url="/schedule-demo"
        type="website"
      />

      <StructuredData
        type="product"
        data={serviceData}
      />

      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Personal Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              See BrightPath in 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Action</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Book a personalized demo with our education specialists and discover how BrightPath Digital can transform your classroom.
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Teachers Using</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-accent">30 Min</div>
                <div className="text-sm text-muted-foreground">Demo Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Free</div>
                <div className="text-sm text-muted-foreground">No Commitment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Choose Your Demo Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Select the demo format that best fits your needs and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoTypes.map((demo, index) => (
                <Card 
                  key={demo.title} 
                  className={`shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300 cursor-pointer ${
                    demo.popular ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                >
                  {demo.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <demo.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading font-bold text-foreground">
                      {demo.title}
                    </CardTitle>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                    <p className="text-muted-foreground text-sm">{demo.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {demo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Book Your Demo
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill in your details and select your preferred time slot.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-primary" />
                    <span>Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="your.email@school.ca"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="schoolName">School/Organization *</Label>
                      <Input
                        id="schoolName"
                        placeholder="Enter school name"
                        value={formData.schoolName}
                        onChange={(e) => handleInputChange("schoolName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="head-teacher">Head Teacher</SelectItem>
                            <SelectItem value="deputy-head">Deputy Head</SelectItem>
                            <SelectItem value="ict-coordinator">ICT Coordinator</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="studentCount">Number of Students</Label>
                        <Select value={formData.studentCount} onValueChange={(value) => handleInputChange("studentCount", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
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

                    <div className="space-y-2">
                      <Label htmlFor="interests">Specific Interests (Optional)</Label>
                      <Textarea
                        id="interests"
                        placeholder="Tell us about your specific needs or questions..."
                        value={formData.interests}
                        onChange={(e) => handleInputChange("interests", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Calendar & Time Selection */}
              <div className="space-y-6">
                <Card className="shadow-medium border-border bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                      <span>Select Date & Time</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    />
                  </CardContent>
                </Card>

                {selectedDate && (
                  <Card className="shadow-medium border-border bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Available Times</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-white shadow-medium hover:shadow-large disabled:opacity-70"
                  disabled={isSubmitting || !selectedDate || !selectedTime || !formData.firstName || !formData.email || !formData.schoolName}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? `Booking Demo... ${countdown}s` : "Book Demo"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                What to Expect in Your Demo
              </h2>
              <p className="text-xl text-muted-foreground">
                Our education specialists will guide you through a personalized experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-soft border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Canadian teachers already transforming their classrooms with BrightPath Digital.
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

        <SuccessPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title="Demo Booked Successfully!"
          message="Your personalized demo session has been scheduled! We'll send you a calendar invitation and join link via email. Prepare to discover how BrightPath Digital can transform your classroom."
          actionText="View Calendar"
          onAction={() => {
            setShowPopup(false);
            // Could open calendar or confirmation page
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleDemo;