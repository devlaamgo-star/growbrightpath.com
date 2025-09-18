import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone,
  Calendar,
  FileText,
  Camera,
  Globe,
  Zap,
  Heart,
  Award,
  Clock,
  CheckCircle2,
  Play
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Teaching & Learning",
      description: "Powerful tools for modern educators",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        {
          name: "Digital Portfolio Creation",
          description: "Students showcase their learning journey with multimedia portfolios that capture growth over time.",
          icon: FileText,
          benefits: ["Multimedia support", "Progress tracking", "Easy sharing", "Template library"]
        },
        {
          name: "Lesson Planning Tools",
          description: "Canadian curriculum-aligned planning with drag-and-drop activities and resource management.",
          icon: Calendar,
          benefits: ["Curriculum alignment", "Resource library", "Activity builder", "Standards tracking"]
        },
        {
          name: "Interactive Activities",
          description: "Engaging digital activities that make learning fun and memorable for all students.",
          icon: Play,
          benefits: ["Gamification", "Adaptive learning", "Instant feedback", "Progress analytics"]
        },
        {
          name: "Assessment & Feedback",
          description: "Real-time assessment tools with detailed analytics and personalized feedback systems.",
          icon: CheckCircle2,
          benefits: ["Real-time scoring", "Detailed analytics", "Custom rubrics", "Peer assessment"]
        }
      ]
    },
    {
      title: "Communication & Engagement",
      description: "Connect your learning community",
      icon: MessageSquare,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      features: [
        {
          name: "Family Communication",
          description: "Keep families engaged with instant updates, photos, and messages about student progress.",
          icon: Heart,
          benefits: ["Instant messaging", "Photo sharing", "Progress updates", "Event notifications"]
        },
        {
          name: "Student Collaboration",
          description: "Foster teamwork through interactive group projects and peer-to-peer learning tools.",
          icon: Users,
          benefits: ["Group workspaces", "Peer feedback", "Shared resources", "Discussion forums"]
        },
        {
          name: "Class Announcements",
          description: "Share important updates, homework assignments, and celebrations with your entire class.",
          icon: Globe,
          benefits: ["Scheduled posts", "Priority levels", "Read receipts", "Multi-language"]
        },
        {
          name: "Virtual Events",
          description: "Host parent evenings, showcases, and community events through integrated video tools.",
          icon: Camera,
          benefits: ["HD video calls", "Screen sharing", "Recording", "Event scheduling"]
        }
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven educational decisions",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        {
          name: "Learning Analytics",
          description: "Comprehensive insights into student progress, engagement, and learning patterns.",
          icon: BarChart3,
          benefits: ["Progress tracking", "Engagement metrics", "Learning gaps", "Trend analysis"]
        },
        {
          name: "Performance Reports",
          description: "Detailed reports for students, families, and administrators with actionable insights.",
          icon: FileText,
          benefits: ["Custom reports", "Automated generation", "Visual dashboards", "Export options"]
        },
        {
          name: "Attendance Tracking",
          description: "Seamless attendance management with automated reports and family notifications.",
          icon: Clock,
          benefits: ["Quick marking", "Automated alerts", "Absence patterns", "Integration ready"]
        },
        {
          name: "Achievement Tracking",
          description: "Monitor and celebrate student achievements, milestones, and personal growth.",
          icon: Award,
          benefits: ["Digital badges", "Milestone tracking", "Progress certificates", "Goal setting"]
        }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade protection",
      icon: Shield,
      color: "text-warning",
      bgColor: "bg-warning/10",
      features: [
        {
          name: "GDPR Compliance",
          description: "Full Canadian data protection compliance with secure, encrypted data handling.",
          icon: Shield,
          benefits: ["Data encryption", "Access controls", "Audit trails", "Privacy by design"]
        },
        {
          name: "User Management",
          description: "Comprehensive role-based access controls for secure user management.",
          icon: Users,
          benefits: ["Role permissions", "Single sign-on", "Account provisioning", "Access logs"]
        },
        {
          name: "Data Backup",
          description: "Automatic daily backups with 99.9% uptime guarantee and disaster recovery.",
          icon: Zap,
          benefits: ["Auto backups", "Version control", "Quick restore", "Redundancy"]
        },
        {
          name: "Mobile Security",
          description: "Secure mobile apps with biometric authentication and device management.",
          icon: Smartphone,
          benefits: ["Biometric login", "Device encryption", "Remote wipe", "App permissions"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Platform Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Powerful Features for 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Education</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover comprehensive tools designed to transform teaching, learning, and communication in your educational community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large">
                <Link to="/demo">Try All Features Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, categoryIndex) => (
          <section key={category.title} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card key={feature.name} className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-heading font-bold text-foreground">
                            {feature.name}
                          </CardTitle>
                          <p className="text-muted-foreground mt-2">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {feature.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Integration Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with your existing tools and systems for a unified educational experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {["Google Workspace", "Microsoft 365", "Canvas LMS", "Zoom", "Teams", "Moodle", "PowerSchool", "SIMS"].map((integration) => (
                <div key={integration} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-sm font-medium">{integration}</div>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/integrations">View All Integrations</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of Canadian educators who are already transforming their classrooms with BrightPath Digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large">
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;