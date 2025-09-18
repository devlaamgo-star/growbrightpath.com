import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">BrightPath Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in September 2025, BrightPath Digital Ltd is revolutionizing education technology across Canada with innovative learning solutions that connect educators, students, and families.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To transform learning experiences by providing innovative digital tools that enhance engagement, improve communication, and empower educational communities across the United Kingdom.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading educational technology platform in Canada, fostering meaningful connections between schools and families while supporting every learner's journey to success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Company Details</h2>
              <p className="text-muted-foreground">Established and registered in the United Kingdom</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Company Number</h3>
                  <p className="text-muted-foreground">16701497</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Established</h3>
                  <p className="text-muted-foreground">September 8, 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Website</h3>
                  <p className="text-muted-foreground">growbrightpath.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Registered Address</h3>
                  <p className="text-muted-foreground">
                    105 Southwood Rd<br />
                    London SE9 3QH<br />
                    United Kingdom
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-muted-foreground">
                    +44 7537 181554<br />
                    director@growbrightpath.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at BrightPath Digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-soft border-border bg-gradient-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of bringing educators, students, and families together through technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft border-border bg-gradient-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for the highest quality in our products and services to support educational success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft border-border bg-gradient-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-secondary-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">Care</h3>
                  <p className="text-muted-foreground">
                    Every feature is designed with genuine care for the educational experience and well-being of learners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Transform Education Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Canadian educators who are already using BrightPath Digital to enhance learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;