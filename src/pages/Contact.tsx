import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Building
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      details: "Available Mon-Fri, 9AM-5PM GMT",
      action: "Start Chat",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our education specialists",
      details: "+44 7537 181554",
      action: "Call Now",
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demonstration",
      details: "30-minute session with expert",
      action: "Book Demo",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions or feedback",
      details: "director@growbrightpath.com",
      action: "Send Email",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM GMT" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM GMT" },
    { day: "Sunday", hours: "Closed" },
    { day: "Bank Holidays", hours: "Closed" }
  ];

  const departments = [
    {
      name: "Sales & Demos",
      description: "Product demonstrations and pricing inquiries",
      contact: "sales@growbrightpath.com",
      phone: "+44 7537 181554",
      icon: Building
    },
    {
      name: "Technical Support",
      description: "Platform help and troubleshooting",
      contact: "support@growbrightpath.com",
      phone: "+44 7537 181554",
      icon: Users
    },
    {
      name: "Training & Onboarding",
      description: "Implementation support and training sessions",
      contact: "training@growbrightpath.com",
      phone: "+44 7537 181554",
      icon: Users
    }
  ];

  const organizationData = {
    name: "BrightPath Digital Ltd",
    url: "https://growbrightpath.com",
    logo: "https://growbrightpath.com/logo.png",
    description: "Educational technology company providing innovative digital learning solutions for educators, students, and families.",
    address: {
      streetAddress: "105 Southwood Rd",
      addressLocality: "London",
      postalCode: "SE9 3QH",
      addressCountry: "GB"
    },
    contactPoint: {
      telephone: "+44 7537 181554",
      contactType: "customer service",
      email: "director@growbrightpath.com"
    },
    sameAs: [
      "https://www.linkedin.com/company/brightpath-digital",
      "https://twitter.com/brightpath_digital"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact BrightPath Digital - Get Support & Book Demos | Educational Technology"
        description="Contact our education specialists for support, demos, and guidance. Multiple ways to reach BrightPath Digital's expert team. Response within 24 hours guaranteed."
        keywords="contact education support, teacher help desk, educational technology support, UK education specialists, demo booking, BrightPath Digital contact"
        url="/contact"
        type="website"
      />

      <StructuredData
        type="organization"
        data={organizationData}
      />

      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              We're Here to 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Help</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about BrightPath Digital? Our education specialists are ready to help you transform your learning environment.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the best way to reach us - we're here to support your educational journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method) => (
                <Card key={method.title} className="text-center shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {method.details}
                    </p>
                    <Link to="/demo" className={`block w-full px-4 py-2 ${method.bgColor} ${method.color} rounded-lg font-medium hover:shadow-soft transition-all duration-300 text-center`}>
                      {method.action}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* Office Information */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Details */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Visit Our Office
                </h2>
                
                <Card className="shadow-medium border-border bg-gradient-card mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">
                          BrightPath Digital Ltd
                        </h3>
                        <p className="text-muted-foreground">
                          105 Southwood Rd<br />
                          London SE9 3QH<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-secondary-accent" />
                        <span className="text-foreground">+44 7537 181554</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <span className="text-foreground">director@growbrightpath.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medium border-border bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-warning" />
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {officeHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Departments */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Department Contacts
                </h2>
                
                <div className="space-y-6">
                  {departments.map((dept) => (
                    <Card key={dept.name} className="shadow-soft border-border bg-gradient-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <dept.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-bold text-foreground mb-2">
                              {dept.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {dept.description}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">{dept.contact}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">{dept.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Company Information
            </h2>
            
            <Card className="shadow-medium border-border bg-gradient-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Company Name</h3>
                      <p className="text-muted-foreground">BrightPath Digital Ltd</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Company Number</h3>
                      <p className="text-muted-foreground">16701497</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Established</h3>
                      <p className="text-muted-foreground">September 8, 2025</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Website</h3>
                      <p className="text-muted-foreground">growbrightpath.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">VAT Number</h3>
                      <p className="text-muted-foreground">GB123456789</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Industry</h3>
                      <p className="text-muted-foreground">Educational Technology</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;