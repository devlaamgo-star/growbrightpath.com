import { ArrowLeft, Calendar, Clock, User, Share2, Heart, Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SuccessPopup } from "@/components/ui/success-popup";
import { shareArticle } from "@/utils/shareUtils";
import familyLearningImage from "@/assets/blog-family-learning.jpg";

const FamilyLearningConnections = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    shareArticle(
      "Supporting Family Learning: Building Strong Home-School Connections",
      "Learn how to create meaningful partnerships between families and schools that enhance student success. Discover strategies for building learning-friendly home environments and effective communication techniques.",
      setShowSharePopup
    );
  };

  const articleData = {
    headline: "Supporting Family Learning: Building Strong Home-School Connections",
    description: "Learn how to create meaningful partnerships between families and schools that enhance student success. Discover strategies for building learning-friendly home environments and effective communication techniques.",
    author: "Emma Rodriguez",
    datePublished: "2024-03-10T00:00:00Z",
    dateModified: "2024-03-10T00:00:00Z",
    image: "https://growbrightpath.com/blog-family-learning.jpg",
    url: "https://growbrightpath.com/blog/family-learning-connections",
    wordCount: 2000,
    articleBody: "The partnership between families and schools is one of the most powerful factors in student success..."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Supporting Family Learning: Building Strong Home-School Connections | BrightPath Digital"
        description="Learn how to create meaningful partnerships between families and schools. Discover strategies for family engagement, home learning environments, and effective communication."
        keywords="family engagement, home school connections, parent involvement, family learning, school communication, UK family education, home learning support"
        url="/blog/family-learning-connections"
        type="article"
        article={{
          author: "Emma Rodriguez",
          publishedTime: "2024-03-10T00:00:00Z",
          modifiedTime: "2024-03-10T00:00:00Z",
          section: "Family Engagement",
          tags: ["Family Learning", "Parent Engagement", "Home School Partnership", "Educational Support"]
        }}
      />

      <StructuredData
        type="article"
        data={articleData}
      />

      <Navigation />
      
      <main>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">Family Engagement</Badge>
              <Badge variant="secondary">Parents</Badge>
              <Badge variant="secondary">Support</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Supporting Family Learning: Building Strong Home-School Connections
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Emma Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={familyLearningImage} 
                alt="Parents and children learning together with educational technology"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The partnership between families and schools is one of the most powerful factors in student success. When parents and educators work together, students achieve better academic outcomes, develop stronger social skills, and maintain higher levels of motivation throughout their educational journey.
            </p>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              The Foundation of Family Engagement
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Family engagement goes beyond occasional parent-teacher conferences or homework help. It's about creating meaningful partnerships where families feel valued, informed, and empowered to support their child's learning both at home and at school.
            </p>

            <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Benefits of Strong Home-School Partnerships</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">For Students</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Higher academic achievement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improved social-emotional development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Better attendance and behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Increased motivation and engagement</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">For Families & Schools</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced communication and trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Shared responsibility for learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>More effective problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stronger school community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Home className="w-8 h-8 text-primary" />
              Creating Learning-Friendly Home Environments
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The home environment plays a crucial role in extending classroom learning. Simple changes to the physical space and daily routines can significantly impact a child's educational success.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4">Physical Environment</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Dedicated Study Space:</strong> Create a quiet, well-lit area for homework and reading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Learning Materials:</strong> Keep books, supplies, and educational resources accessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technology Setup:</strong> Ensure reliable internet and appropriate devices for digital learning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4">Learning Routines</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Consistent Schedule:</strong> Establish regular times for homework and reading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Family Learning Time:</strong> Engage in educational activities together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Progress Monitoring:</strong> Regular check-ins on academic progress and challenges</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" />
              Effective Communication Strategies
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Open, regular communication between families and schools builds trust and ensures everyone is working toward the same goals. Modern technology offers new ways to maintain these vital connections.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Communication Best Practices</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Regular Updates</h4>
                    <p className="text-muted-foreground">Share progress, achievements, and concerns proactively rather than waiting for problems to arise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Multiple Channels</h4>
                    <p className="text-muted-foreground">Use various communication methods: apps, emails, phone calls, and face-to-face meetings to accommodate different preferences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Two-Way Dialogue</h4>
                    <p className="text-muted-foreground">Encourage family input and questions. Create opportunities for parents to share insights about their child's learning style and interests.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Cultural Sensitivity</h4>
                    <p className="text-muted-foreground">Respect diverse family backgrounds and communication styles. Provide translation services when needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Supporting Learning at Home</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Parents don't need to be education experts to support their child's learning effectively. Simple, consistent actions can make a significant difference in academic outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">📚</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Reading Together</h4>
                <p className="text-muted-foreground text-sm">Daily reading activities build literacy skills and create positive associations with learning.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">💬</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Ask Questions</h4>
                <p className="text-muted-foreground text-sm">Show interest in what children are learning by asking about their school day and projects.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Set Goals</h4>
                <p className="text-muted-foreground text-sm">Work together to establish realistic academic and personal goals, celebrating achievements along the way.</p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Overcoming Common Challenges</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Every family faces unique challenges in supporting their child's education. Time constraints, language barriers, and technology gaps are common obstacles that can be addressed with the right strategies and support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-2">Time Management</h4>
                <p className="text-muted-foreground">Integrate learning into daily activities like cooking, shopping, and travel. Short, frequent interactions are often more effective than lengthy sessions.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-2">Academic Confidence</h4>
                <p className="text-muted-foreground">Focus on effort and progress rather than perfection. Encourage a growth mindset that values learning from mistakes and persistence.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-2">Technology Access</h4>
                <p className="text-muted-foreground">Utilize community resources like libraries and after-school programs. Many schools offer device lending programs and tech support for families.</p>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Strengthen Your Family's Learning Journey</h3>
              <p className="text-lg opacity-90 mb-6">
                Discover tools and resources designed to support families in their educational partnership.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/families">Explore Family Resources</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">ER</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Emma Rodriguez</h4>
                <p className="text-muted-foreground">
                  Emma is a family engagement specialist with over 12 years of experience working with diverse communities. She holds a Master's degree in Family and Community Education and is passionate about creating inclusive environments where all families can thrive.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SuccessPopup
        isOpen={showSharePopup}
        onClose={() => setShowSharePopup(false)}
        title="Article Link Copied!"
        message="The link to this article has been copied to your clipboard. Share this valuable content with your network."
        actionText="Copy Again"
        onAction={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
      />

      <Footer />
    </div>
  );
};

export default FamilyLearningConnections;