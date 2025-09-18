import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Camera,
  Award,
  Palette,
  Gamepad2,
  Star,
  Heart,
  Target,
  Zap,
  Lightbulb,
  Rocket,
  Trophy,
  Smile
} from "lucide-react";

const Students = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Express Your Creativity",
      description: "Show off your amazing work with photos, videos, drawings, and voice recordings in your digital portfolio.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Learn with Friends",
      description: "Work together on exciting projects, share ideas, and help each other learn in fun group activities.",
      color: "text-secondary-accent"
    },
    {
      icon: Trophy,
      title: "Celebrate Achievements",
      description: "Earn digital badges, collect certificates, and see your progress as you master new skills and knowledge.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Share with Family",
      description: "Let your family see all the amazing things you're learning and the progress you're making at school.",
      color: "text-warning"
    }
  ];

  const features = [
    {
      category: "Create & Share",
      icon: Palette,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        {
          name: "Digital Portfolio",
          description: "Collect your best work in one special place",
          icon: BookOpen
        },
        {
          name: "Photo & Video",
          description: "Capture your learning moments with pictures and videos",
          icon: Camera
        },
        {
          name: "Voice Recording",
          description: "Record yourself reading, singing, or explaining ideas",
          icon: Zap
        },
        {
          name: "Art Gallery",
          description: "Display your drawings, paintings, and creative projects",
          icon: Palette
        }
      ]
    },
    {
      category: "Learn & Play",
      icon: Gamepad2,
      color: "text-secondary-accent",
      bgColor: "bg-secondary-accent/10",
      items: [
        {
          name: "Fun Activities",
          description: "Interactive games and quizzes that make learning exciting",
          icon: Gamepad2
        },
        {
          name: "Story Writing",
          description: "Create amazing stories and share them with your class",
          icon: BookOpen
        },
        {
          name: "Science Experiments",
          description: "Document your discoveries and hypothesis testing",
          icon: Lightbulb
        },
        {
          name: "Math Challenges",
          description: "Solve puzzles and problems in fun, engaging ways",
          icon: Target
        }
      ]
    },
    {
      category: "Grow & Achieve",
      icon: Rocket,
      color: "text-accent",
      bgColor: "bg-accent/10",
      items: [
        {
          name: "Progress Tracking",
          description: "See how much you've learned and grown over time",
          icon: Rocket
        },
        {
          name: "Goal Setting",
          description: "Set personal learning goals and work towards them",
          icon: Target
        },
        {
          name: "Achievement Badges",
          description: "Earn special badges for completing challenges",
          icon: Award
        },
        {
          name: "Reflection Journal",
          description: "Think about your learning and write down your thoughts",
          icon: Heart
        }
      ]
    }
  ];

  const studentStories = [
    {
      name: "Emma, Age 8",
      school: "London Primary",
      story: "I love showing my mum and dad my reading progress! My teacher says I've improved so much this year.",
      achievement: "Reading Level Up!",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      name: "Aiden, Age 10",
      school: "Manchester Academy",
      story: "My science portfolio has photos of all our experiments. My favorite was when we made volcanoes!",
      achievement: "Science Explorer",
      icon: Lightbulb,
      color: "text-secondary-accent"
    },
    {
      name: "Sofia, Age 7",
      school: "Birmingham School",
      story: "I recorded myself singing in three different languages. My family loved hearing my progress!",
      achievement: "Musical Star",
      icon: Star,
      color: "text-accent"
    }
  ];

  const skillAreas = [
    { name: "Reading & Writing", icon: BookOpen, progress: 85 },
    { name: "Mathematics", icon: Target, progress: 78 },
    { name: "Science", icon: Lightbulb, progress: 92 },
    { name: "Creative Arts", icon: Palette, progress: 88 },
    { name: "Collaboration", icon: Users, progress: 95 },
    { name: "Digital Skills", icon: Zap, progress: 82 }
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
                  For Students
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                  Your Learning 
                  <span className="bg-gradient-success bg-clip-text text-transparent"> Adventure</span> Starts Here!
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Create amazing portfolios, work with friends, and show everyone how much you're learning and growing!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-success text-white shadow-medium hover:shadow-large">
                    <Link to="/demo">
                      <Smile className="w-5 h-5 mr-2" />
                      Start Creating
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2">
                    <Link to="/features">See What You Can Do</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">Create</div>
                    <div className="text-sm text-muted-foreground">Amazing Work</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Share</div>
                    <div className="text-sm text-muted-foreground">With Family</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-accent">Grow</div>
                    <div className="text-sm text-muted-foreground">Every Day</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="shadow-large border-0 overflow-hidden bg-gradient-card transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-bold text-foreground">Maya's Portfolio</h3>
                        <div className="flex space-x-1">
                          {Array.from({length: 5}).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 rounded-lg p-4 text-center">
                          <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">Science Project</div>
                          <div className="text-xs text-muted-foreground">Growing Plants</div>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-4 text-center">
                          <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
                          <div className="text-sm font-medium">Story Writing</div>
                          <div className="text-xs text-muted-foreground">Adventure Tale</div>
                        </div>
                        <div className="bg-secondary-accent/10 rounded-lg p-4 text-center">
                          <Palette className="w-8 h-8 text-secondary-accent mx-auto mb-2" />
                          <div className="text-sm font-medium">Art Gallery</div>
                          <div className="text-xs text-muted-foreground">Watercolors</div>
                        </div>
                        <div className="bg-warning/10 rounded-lg p-4 text-center">
                          <Trophy className="w-8 h-8 text-warning mx-auto mb-2" />
                          <div className="text-sm font-medium">Achievements</div>
                          <div className="text-xs text-muted-foreground">12 Badges</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Portfolio Progress</div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="bg-gradient-success h-3 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                        <div className="text-sm font-medium text-accent mt-1">87% Complete!</div>
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
                Why Students Love BrightPath Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover all the amazing ways you can learn, create, and share your incredible work!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300 hover:scale-105">
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
                Amazing Things You Can Do
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore all the fun features that make learning an exciting adventure!
              </p>
            </div>

            <div className="space-y-16">
              {features.map((category) => (
                <div key={category.category}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Card key={item.name} className="text-center shadow-soft border-border bg-gradient-card hover:shadow-medium transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                            <item.icon className={`w-6 h-6 ${category.color}`} />
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

        {/* Student Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Student Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                See how other students are using BrightPath Digital to showcase their amazing work!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentStories.map((story, index) => (
                <Card key={index} className="shadow-medium border-border bg-gradient-card">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${story.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <story.icon className={`w-8 h-8 ${story.color}`} />
                      </div>
                      <Badge className={`${story.color.replace('text-', 'bg-')}/10 ${story.color}`}>
                        {story.achievement}
                      </Badge>
                    </div>
                    
                    <blockquote className="text-center text-muted-foreground mb-6 leading-relaxed">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-heading font-semibold text-foreground">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.school}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Progress */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Track Your Learning Journey
              </h2>
              <p className="text-xl text-white/90">
                Watch yourself grow and improve in different subjects and skills!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillAreas.map((skill) => (
                <div key={skill.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-6 h-6 text-white" />
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <span className="text-white font-bold">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your Learning Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ask your teacher about using BrightPath Digital in your classroom!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-success text-white shadow-medium hover:shadow-large">
                <Link to="/demo">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Link to="/teachers">Tell My Teacher</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Students;