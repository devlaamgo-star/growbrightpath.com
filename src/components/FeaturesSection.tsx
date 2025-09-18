import { BookOpen, MessageSquare, BarChart3, Users, Shield, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import featuresImage from "@/assets/features-grid.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Digital Portfolio Creation",
      description: "Students showcase their learning journey with multimedia portfolios that capture growth over time.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Real-time Family Communication",
      description: "Keep families engaged with instant updates, photos, and messages about student progress.",
      color: "text-secondary-accent"
    },
    {
      icon: BarChart3,
      title: "Learning Analytics",
      description: "Data-driven insights help educators track progress and personalize learning experiences.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Foster teamwork and peer-to-peer learning through interactive group projects and discussions.",
      color: "text-warning"
    },
    {
      icon: Shield,
      title: "GDPR Compliant & Secure",
      description: "Canada-based data handling with enterprise-grade security ensuring student privacy protection.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access learning tools anywhere with our responsive platform designed for all devices.",
      color: "text-secondary-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Everything You Need for
            <span className="bg-gradient-success bg-clip-text text-transparent"> Modern Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover powerful tools designed to enhance engagement, improve communication, and track progress across your educational community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-medium transition-all duration-300 border-border bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-background to-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={featuresImage}
                alt="Educational platform features including lesson planning, student portfolios, family communication, and analytics dashboards"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Overlay Stats */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Live Updates Active</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">4.9/5</div>
                <div className="text-xs text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;