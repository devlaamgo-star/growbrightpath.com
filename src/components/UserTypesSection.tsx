import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Settings,
  BookOpen,
  MessageCircle,
  BarChart,
  Shield,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import teacherImage from "@/assets/teacher-demo.jpg";

const UserTypesSection = () => {
  const [activeTab, setActiveTab] = useState("teachers");

  const userTypes = [
    {
      id: "teachers",
      title: "Teachers",
      icon: GraduationCap,
      description: "Powerful tools for modern educators",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Canadian Curriculum-aligned lesson planning",
        "Digital student portfolios",
        "Real-time assessment tools",
        "Family communication dashboard",
        "Professional development resources"
      ]
    },
    {
      id: "students",
      title: "Students",
      icon: Users,
      description: "Engaging learning experiences",
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      features: [
        "Creative project showcasing",
        "Peer collaboration tools",
        "Digital literacy development",
        "Self-reflection journals",
        "Achievement tracking"
      ]
    },
    {
      id: "families",
      title: "Families",
      icon: Heart,
      description: "Stay connected to learning",
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "Real-time learning updates",
        "Home-school communication",
        "Student progress visibility",
        "Celebration of achievements",
        "Educational resource access"
      ]
    },
    {
      id: "administrators",
      title: "Administrators",
      icon: Settings,
      description: "School-wide insights and management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      features: [
        "School-wide analytics",
        "Teacher support tools",
        "Family engagement metrics",
        "Curriculum standards tracking",
        "ROI measurement"
      ]
    }
  ];

  const activeUserType = userTypes.find(type => type.id === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            For Everyone
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Solutions for Every
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're an educator, student, family member, or administrator, BrightPath Digital has the tools you need.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === type.id
                  ? `${type.bgColor} ${type.color} shadow-soft`
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Empowering {activeUserType?.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {activeUserType?.description}
              </p>
            </div>

            <div className="space-y-4">
              {activeUserType?.features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-6 h-6 rounded-full ${activeUserType.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <div className={`w-2 h-2 rounded-full ${activeUserType.color.replace('text-', 'bg-')}`}></div>
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className={`${activeUserType?.color.replace('text-', 'bg-')} text-white shadow-soft hover:shadow-medium transition-all duration-300`}
                asChild
              >
                <Link to={`/${activeTab}`}>
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2"
                asChild
              >
                <Link to="/demo">
                  Try It Free
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden shadow-large border-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={teacherImage}
                    alt="Canadian teacher using digital learning platform with students"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
                      <MessageCircle className="w-5 h-5 text-secondary-accent" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
                      <BarChart className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  
                  {/* Security Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-medium">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-foreground">GDPR Secure</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;