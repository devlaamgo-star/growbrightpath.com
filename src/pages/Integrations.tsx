import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Search,
  CheckCircle2,
  Zap,
  Users,
  Video,
  FileText,
  Mail,
  Calendar,
  Cloud,
  Database,
  Shield,
  Settings,
  Monitor,
  Smartphone,
  Globe,
  BookOpen,
  GraduationCap,
  MessageSquare,
  BarChart3
} from "lucide-react";

const Integrations = () => {
  const integrationCategories = [
    {
      name: "Learning Management Systems",
      description: "Seamlessly connect with your existing LMS platform",
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-primary/10",
      integrations: [
        {
          name: "Canvas LMS",
          description: "Sync grades, assignments, and student data",
          features: ["Grade passback", "Single sign-on", "Roster sync", "Assignment integration"],
          status: "Available",
          setupTime: "15 minutes"
        },
        {
          name: "Moodle",
          description: "Connect courses and student portfolios",
          features: ["Content sharing", "Grade sync", "User management", "Activity tracking"],
          status: "Available",
          setupTime: "20 minutes"
        },
        {
          name: "Blackboard Learn",
          description: "Integrate with Blackboard's ecosystem",
          features: ["Grade center sync", "Content integration", "User authentication"],
          status: "Available",
          setupTime: "25 minutes"
        },
        {
          name: "Schoology",
          description: "Connect assignments and gradebooks",
          features: ["Assignment sync", "Grade passback", "Resource sharing"],
          status: "Coming Soon",
          setupTime: "15 minutes"
        }
      ]
    },
    {
      name: "Student Information Systems",
      description: "Integrate with your school's SIS for seamless data flow",
      icon: Database,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      integrations: [
        {
          name: "PowerSchool",
          description: "Sync student records and demographics",
          features: ["Student enrollment", "Grade sync", "Attendance tracking", "Parent portal"],
          status: "Available",
          setupTime: "30 minutes"
        },
        {
          name: "SIMS (School Information Management System)",
          description: "Connect with UK school management system",
          features: ["Student data sync", "Timetable integration", "Assessment data"],
          status: "Available",
          setupTime: "45 minutes"
        },
        {
          name: "Infinite Campus",
          description: "Integrate with comprehensive student data",
          features: ["Roster management", "Grade sync", "Behavior tracking"],
          status: "Available",
          setupTime: "25 minutes"
        },
        {
          name: "Skyward",
          description: "Connect family and student information",
          features: ["Family portal sync", "Academic records", "Communication tools"],
          status: "Beta",
          setupTime: "35 minutes"
        }
      ]
    },
    {
      name: "Communication & Collaboration",
      description: "Enhance communication with integrated messaging tools",
      icon: MessageSquare,
      color: "text-accent",
      bgColor: "bg-accent/10",
      integrations: [
        {
          name: "Microsoft Teams",
          description: "Integrate with Teams for Education",
          features: ["Class teams sync", "File sharing", "Video meetings", "Assignment integration"],
          status: "Available",
          setupTime: "10 minutes"
        },
        {
          name: "Google Meet",
          description: "Schedule and join video calls directly",
          features: ["Meeting scheduling", "Calendar integration", "Recording links"],
          status: "Available",
          setupTime: "5 minutes"
        },
        {
          name: "Zoom",
          description: "Connect Zoom meetings and recordings",
          features: ["Meeting scheduling", "Recording access", "Attendance tracking"],
          status: "Available",
          setupTime: "10 minutes"
        },
        {
          name: "Remind",
          description: "Send messages through Remind platform",
          features: ["Class messaging", "Parent communication", "Announcement broadcasting"],
          status: "Available",
          setupTime: "15 minutes"
        }
      ]
    },
    {
      name: "Productivity & Office Suites",
      description: "Work seamlessly with your favorite productivity tools",
      icon: FileText,
      color: "text-warning",
      bgColor: "bg-warning/10",
      integrations: [
        {
          name: "Google Workspace for Education",
          description: "Full integration with Google's education suite",
          features: ["Google Drive sync", "Docs collaboration", "Calendar integration", "Gmail connectivity"],
          status: "Available",
          setupTime: "15 minutes"
        },
        {
          name: "Microsoft 365 Education",
          description: "Connect with Microsoft's education platform",
          features: ["OneDrive sync", "Office Online", "SharePoint integration", "Outlook calendar"],
          status: "Available",
          setupTime: "20 minutes"
        },
        {
          name: "Adobe Creative Cloud",
          description: "Share creative projects and portfolios",
          features: ["Creative work showcase", "Portfolio integration", "File sharing"],
          status: "Beta",
          setupTime: "25 minutes"
        },
        {
          name: "Flipgrid",
          description: "Integrate video discussions and responses",
          features: ["Video responses", "Discussion topics", "Student reflections"],
          status: "Coming Soon",
          setupTime: "10 minutes"
        }
      ]
    },
    {
      name: "Assessment & Analytics",
      description: "Connect assessment tools and analytics platforms",
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      integrations: [
        {
          name: "Kahoot!",
          description: "Embed interactive quizzes and games",
          features: ["Quiz integration", "Game results", "Learning analytics"],
          status: "Available",
          setupTime: "10 minutes"
        },
        {
          name: "Padlet",
          description: "Share collaborative boards and ideas",
          features: ["Board embedding", "Collaboration tracking", "Student submissions"],
          status: "Available",
          setupTime: "5 minutes"
        },
        {
          name: "Seesaw",
          description: "Connect digital portfolios and activities",
          features: ["Portfolio sync", "Activity sharing", "Family communication"],
          status: "Available",
          setupTime: "20 minutes"
        },
        {
          name: "IXL Learning",
          description: "Track personalized learning progress",
          features: ["Progress sync", "Skill tracking", "Diagnostic reports"],
          status: "Beta",
          setupTime: "30 minutes"
        }
      ]
    },
    {
      name: "Parent & Family Engagement",
      description: "Strengthen family connections through integrated platforms",
      icon: Users,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      integrations: [
        {
          name: "ClassDojo",
          description: "Connect behavior tracking and communication",
          features: ["Behavior points sync", "Photo sharing", "Family messaging"],
          status: "Available",
          setupTime: "15 minutes"
        },
        {
          name: "Bloomz",
          description: "Coordinate with parent communication platform",
          features: ["Message sync", "Event coordination", "Photo sharing"],
          status: "Available",
          setupTime: "20 minutes"
        },
        {
          name: "ParentSquare",
          description: "Integrate with comprehensive parent platform",
          features: ["Message synchronization", "Event management", "Document sharing"],
          status: "Coming Soon",
          setupTime: "25 minutes"
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-accent/10 text-accent">Available</Badge>;
      case "Beta":
        return <Badge className="bg-warning/10 text-warning">Beta</Badge>;
      case "Coming Soon":
        return <Badge className="bg-muted text-muted-foreground">Coming Soon</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">{status}</Badge>;
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
              Integrations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Connect Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              BrightPath Digital integrates seamlessly with the tools you already use, creating a unified educational experience.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search integrations..."
                className="pl-12 pr-4 py-3 text-lg border-2 rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Integrations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-accent mb-2">5 min</div>
                <div className="text-muted-foreground">Average Setup</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {integrationCategories.map((category, categoryIndex) => (
                <div key={category.name}>
                  <div className="text-center mb-12">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                      {category.name}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {category.integrations.map((integration, index) => (
                      <Card key={integration.name} className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-heading font-bold text-foreground mb-2">
                                {integration.name}
                              </CardTitle>
                              <p className="text-muted-foreground text-sm">
                                {integration.description}
                              </p>
                            </div>
                            {getStatusBadge(integration.status)}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {integration.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center space-x-2">
                                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Settings className="w-4 h-4" />
                              <span>Setup: {integration.setupTime}</span>
                            </div>
                            <Button 
                              size="sm" 
                              disabled={integration.status === "Coming Soon"}
                              className={integration.status === "Available" ? "bg-gradient-primary text-white" : ""}
                            >
Coming Soon
                            </Button>
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

        {/* API & Custom Integrations */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Need a Custom Integration?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our REST API and webhook system make it easy to connect BrightPath Digital with any platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-soft border-border bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">REST API</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive API documentation with authentication and rate limiting
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-secondary-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Webhooks</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time event notifications for seamless data synchronization
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">OAuth 2.0</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure authentication with industry-standard protocols
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white shadow-medium hover:shadow-large">
                <Link to="/contact">Request Integration</Link>
              </Button>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Connect Your Tools?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial and begin integrating with your favorite educational tools today.
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

export default Integrations;