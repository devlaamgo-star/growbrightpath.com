import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  MessageSquare, 
  Camera,
  BarChart3,
  Clock,
  Star,
  Home,
  Users,
  Award,
  Smartphone,
  Bell,
  Calendar,
  Share2,
  Eye,
  BookOpen,
  Target
} from "lucide-react";

const Families = () => {
  const benefits = [
    {
      icon: Eye,
      title: "See Learning in Real-Time",
      description: "Watch your child's progress unfold with instant updates, photos, and achievements shared directly from the classroom.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Stay Connected with Teachers",
      description: "Communicate easily with your child's teacher through secure messaging, photos, and video updates.",
      color: "text-secondary-accent"
    },
    {
      icon: Home,
      title: "Support Learning at Home",
      description: "Access resources, activities, and suggestions to continue the learning journey beyond school hours.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Celebrate Every Achievement",
      description: "Share in your child's successes with digital certificates, badges, and milestone celebrations.",
      color: "text-warning"
    }
  ];

  const features = [
    {
      category: "Real-Time Updates",
      icon: Bell,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        {
          name: "Learning Moments",
          description: "Receive photos and videos of your child's activities",
          icon: Camera,
          example: "Photos from today's science experiment"
        },
        {
          name: "Progress Updates",
          description: "Get notified when your child reaches new milestones",
          icon: BarChart3,
          example: "Moved up a reading level!"
        },
        {
          name: "Daily Summaries",
          description: "End-of-day reports on activities and achievements",
          icon: Clock,
          example: "What we did today in Year 3"
        },
        {
          name: "Achievement Alerts",
          description: "Instant notifications when badges are earned",
          icon: Award,
          example: "Earned 'Math Master' badge"
        }
      ]
    },
    {
      category: "Communication Hub",
      icon: MessageSquare,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      items: [
        {
          name: "Direct Messaging",
          description: "Secure chat with your child's teacher",
          icon: MessageSquare,
          example: "Ask about homework or share concerns"
        },
        {
          name: "Video Messages",
          description: "Receive personalized video updates",
          icon: Camera,
          example: "Teacher explaining today's learning"
        },
        {
          name: "Group Updates",
          description: "Class-wide announcements and news",
          icon: Users,
          example: "Upcoming school trip information"
        },
        {
          name: "Event Planning",
          description: "Stay informed about school events",
          icon: Calendar,
          example: "Parent evening bookings"
        }
      ]
    },
    {
      category: "Learning Portfolio",
      icon: BookOpen,
      color: "text-accent",
      bgColor: "bg-accent/10",
      items: [
        {
          name: "Digital Portfolio",
          description: "Complete collection of your child's work",
          icon: BookOpen,
          example: "All artwork and writing samples"
        },
        {
          name: "Progress Analytics",
          description: "Visual charts showing learning growth",
          icon: BarChart3,
          example: "Reading progress over the year"
        },
        {
          name: "Goal Tracking",
          description: "Monitor personal learning objectives",
          icon: Target,
          example: "Times tables mastery goals"
        },
        {
          name: "Share & Celebrate",
          description: "Easy sharing with extended family",
          icon: Share2,
          example: "Send portfolio to grandparents"
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent of Emma (Year 2)",
      quote: "I love seeing Emma's progress in real-time. The photos from her science experiments and reading achievements make me feel so connected to her school day.",
      rating: 5,
      child: "Emma",
      achievement: "Reading level improved by 3 stages"
    },
    {
      name: "James Thompson",
      role: "Parent of Oliver (Reception)",
      quote: "As a working parent, BrightPath Digital helps me stay involved. I can see Oliver's artwork and chat with his teacher even when I can't be there physically.",
      rating: 5,
      child: "Oliver",
      achievement: "First writing samples captured"
    },
    {
      name: "Priya Patel",
      role: "Parent of Arjun (Year 4)",
      quote: "The progress analytics are amazing. We can see exactly where Arjun excels and where he needs support. It's transformed our conversations about school.",
      rating: 5,
      child: "Arjun",
      achievement: "Math confidence increased 40%"
    }
  ];

  const familyStats = [
    { label: "Families Connected", value: "25,000+", icon: Users },
    { label: "Learning Moments Shared", value: "2.5M+", icon: Camera },
    { label: "Messages Exchanged", value: "500K+", icon: MessageSquare },
    { label: "Achievements Celebrated", value: "150K+", icon: Award }
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
                <Badge className="px-4 py-2 bg-accent/10 text-accent">
                  For Families
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                  Stay Connected to Your Child's 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience every moment of your child's educational adventure with real-time updates, photos, and progress tracking from BrightPath Digital.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large">
                    <Link to="/demo">
                      <Heart className="w-5 h-5 mr-2" />
                      Join Your Child's School
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2">
                    <Link to="/features">See How It Works</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Real-Time</div>
                    <div className="text-sm text-muted-foreground">Learning Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-accent mb-2">Secure</div>
                    <div className="text-sm text-muted-foreground">Communication</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="shadow-large border-0 overflow-hidden bg-gradient-card">
                  <CardContent className="p-0">
                    <div className="bg-gradient-primary p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-heading font-bold">Today's Updates</h3>
                        <div className="flex items-center space-x-2">
                          <Bell className="w-5 h-5" />
                          <span className="text-sm">3 new</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-accent/10 rounded-lg">
                        <Camera className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium text-foreground">Science Experiment</div>
                          <div className="text-sm text-muted-foreground">Emma exploring plant growth</div>
                          <div className="text-xs text-muted-foreground">2 minutes ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-medium text-foreground">New Achievement!</div>
                          <div className="text-sm text-muted-foreground">Reading Badge earned</div>
                          <div className="text-xs text-muted-foreground">1 hour ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-3 bg-secondary-accent/10 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-secondary-accent mt-1" />
                        <div>
                          <div className="font-medium text-foreground">Teacher Message</div>
                          <div className="text-sm text-muted-foreground">Great progress this week!</div>
                          <div className="text-xs text-muted-foreground">3 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Connecting Families Across Canada
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of families already experiencing the joy of connected learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {familyStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Why Families Choose BrightPath Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how our platform strengthens the connection between home and school, keeping you involved in every step of your child's learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${benefit.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
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
                Features Designed for Families
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to stay connected and support your child's learning journey.
              </p>
            </div>

            <div className="space-y-16">
              {features.map((category) => (
                <div key={category.category}>
                  <div className="text-center mb-12">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Card key={item.name} className="shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                            <item.icon className={`w-6 h-6 ${category.color}`} />
                          </div>
                          <CardTitle className="text-lg font-heading font-bold text-foreground">
                            {item.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <div className="text-xs text-muted-foreground mb-1">Example:</div>
                            <div className="text-sm font-medium text-foreground">"{item.example}"</div>
                          </div>
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
                What Families Are Saying
              </h2>
              <p className="text-xl text-muted-foreground">
                Real stories from parents who have transformed their connection to their child's education.
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
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                      
                      <div className="bg-accent/10 rounded-lg p-3">
                        <div className="text-sm">
                          <span className="font-medium text-foreground">{testimonial.child}'s Achievement:</span>
                          <div className="text-accent">{testimonial.achievement}</div>
                        </div>
                      </div>
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
              Ready to Connect with Your Child's Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ask your child's school about BrightPath Digital or explore our platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/demo">Explore the Platform</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Your School</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Families;