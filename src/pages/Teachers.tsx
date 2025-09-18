import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Users, 
  BarChart3,
  Calendar,
  MessageSquare,
  FileText,
  Award,
  Lightbulb,
  Target,
  Heart,
  Star,
  CheckCircle2,
  Play
} from "lucide-react";

const Teachers = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Streamlined lesson planning, automated assessments, and instant communication tools free up your time for what matters most - teaching.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Engage Every Student",
      description: "Interactive activities, personalized feedback, and collaborative projects ensure every learner stays motivated and involved.",
      color: "text-secondary-accent"
    },
    {
      icon: Heart,
      title: "Strengthen Family Bonds",
      description: "Real-time updates and photo sharing help families feel connected to their child's learning journey every step of the way.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Track Progress Easily",
      description: "Visual analytics and detailed reports help you identify learning gaps and celebrate student achievements.",
      color: "text-warning"
    }
  ];

  const features = [
    {
      category: "Lesson Planning & Resources",
      items: [
        {
          name: "Canadian Curriculum Alignment",
          description: "Pre-built activities aligned with provincial and territorial curricula",
          icon: Target
        },
        {
          name: "Activity Builder",
          description: "Drag-and-drop tools to create engaging digital activities",
          icon: Lightbulb
        },
        {
          name: "Resource Library",
          description: "Thousands of ready-to-use educational resources and templates",
          icon: BookOpen
        },
        {
          name: "Collaborative Planning",
          description: "Share and co-create lessons with your teaching team",
          icon: Users
        }
      ]
    },
    {
      category: "Student Assessment & Portfolio",
      items: [
        {
          name: "Digital Portfolios",
          description: "Help students showcase their learning journey with multimedia collections",
          icon: FileText
        },
        {
          name: "Real-time Assessment",
          description: "Quick formative assessments with instant feedback and analytics",
          icon: CheckCircle2
        },
        {
          name: "Progress Tracking",
          description: "Visual progress charts showing individual and class-wide growth",
          icon: BarChart3
        },
        {
          name: "Achievement Badges",
          description: "Celebrate milestones with digital badges and certificates",
          icon: Award
        }
      ]
    },
    {
      category: "Communication & Engagement",
      items: [
        {
          name: "Family Updates",
          description: "Share learning moments, photos, and achievements instantly",
          icon: MessageSquare
        },
        {
          name: "Class Blog",
          description: "Create a digital classroom diary to share with families",
          icon: FileText
        },
        {
          name: "Event Management",
          description: "Organize parent evenings, trips, and school events seamlessly",
          icon: Calendar
        },
        {
          name: "Video Messages",
          description: "Send personal video updates to individual families",
          icon: Play
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Year 3 Teacher, Manchester Primary",
      quote: "BrightPath Digital has revolutionized how I teach. The time I save on admin means more quality interaction with my students. Parents love seeing their child's progress in real-time!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Reception Teacher, London Academy",
      quote: "The digital portfolios are incredible. Watching children's confidence grow as they see their own progress is magical. Families are more engaged than ever before.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Year 6 Teacher, Birmingham High",
      quote: "As a NQT, BrightPath Digital gave me the confidence I needed. The curriculum-aligned resources and assessment tools have been invaluable in my first year.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="px-4 py-2 bg-primary/10 text-primary">
                  For Teachers
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                  Empower Your 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Teaching Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join over 15,000 Canadian teachers who use BrightPath Digital to create engaging lessons, track student progress, and build stronger connections with families.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large">
                    <Link to="/demo">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2">
                    <Link to="/features">Explore Features</Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30 Days</div>
                    <div className="text-sm text-muted-foreground">Free Trial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-accent">No Setup</div>
                    <div className="text-sm text-muted-foreground">Required</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="shadow-large border-0 overflow-hidden bg-gradient-card">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Today's Lesson Plan</h3>
                          <p className="text-sm text-muted-foreground">Mathematics - Year 3</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                          <span className="text-sm font-medium">Warm-up Activity</span>
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-secondary-accent/10 rounded-lg">
                          <span className="text-sm font-medium">Main Lesson</span>
                          <div className="w-5 h-5 border-2 border-secondary-accent rounded"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span className="text-sm font-medium">Plenary</span>
                          <div className="w-5 h-5 border-2 border-muted-foreground rounded"></div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Class Progress</span>
                          <span className="text-sm font-medium text-primary">87%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Why Teachers Love BrightPath Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed by educators, for educators - discover how our platform transforms your daily teaching experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${benefit.color.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Everything You Need to Excel
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive tools designed to support every aspect of your teaching practice.
              </p>
            </div>

            <div className="space-y-16">
              {features.map((category, categoryIndex) => (
                <div key={category.category}>
                  <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Card key={item.name} className="text-center shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-heading font-semibold text-foreground mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                What Teachers Are Saying
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from educators transforming their classrooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-medium border-border bg-gradient-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-warning fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
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
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Canadian teachers who have already discovered the power of BrightPath Digital. Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-6">
              30-day free trial • No setup required • Cancel anytime
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teachers;