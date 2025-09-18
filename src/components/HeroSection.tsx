import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, School, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium shadow-soft">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 25,000+ Canadian Educators
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Transform Learning
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Connecting educators, students, and families through innovative digital learning solutions across Canada.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">Family Engagement</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <School className="w-5 h-5 text-secondary-accent" />
                <span className="text-sm">Canadian Curriculum Aligned</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-white shadow-medium hover:shadow-large transition-all duration-300 group"
                asChild
              >
                <Link to="/demo">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading schools across Canada</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="flex items-center justify-center h-12 px-4 bg-muted/50 rounded-lg">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">LONDON ACADEMY</span>
                </div>
                <div className="flex items-center justify-center h-12 px-4 bg-muted/50 rounded-lg">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">MANCHESTER PRIMARY</span>
                </div>
                <div className="flex items-center justify-center h-12 px-4 bg-muted/50 rounded-lg">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">BIRMINGHAM HIGH</span>
                </div>
                <div className="flex items-center justify-center h-12 px-4 bg-muted/50 rounded-lg">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">BRISTOL COLLEGE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Diverse students and teachers collaborating with digital learning tools in a modern Canadian classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-large animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-large animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;