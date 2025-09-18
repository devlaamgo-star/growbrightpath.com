import { ArrowLeft, Calendar, Clock, User, Share2, Eye, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SuccessPopup } from "@/components/ui/success-popup";
import { shareArticle } from "@/utils/shareUtils";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import vrEducationImage from "@/assets/blog-vr-education.jpg";
import { useState } from "react";

const VREducationExperiences = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    shareArticle(
      "Virtual Reality in Education: Immersive Learning Experiences",
      "Discover how Virtual Reality is transforming education by creating immersive experiences that enhance learning outcomes.",
      setShowSharePopup
    );
  };

  const articleData = {
    headline: "Virtual Reality in Education: Immersive Learning Experiences",
    description: "Discover how Virtual Reality is transforming education by creating immersive experiences that enhance learning outcomes. Explore VR applications across subjects and implementation strategies.",
    author: "Dr. Alex Thompson",
    datePublished: "2024-03-08T00:00:00Z",
    dateModified: "2024-03-08T00:00:00Z",
    image: "https://growbrightpath.com/blog-vr-education.jpg",
    url: "https://growbrightpath.com/blog/vr-education-experiences",
    wordCount: 2500,
    articleBody: "Virtual Reality is transforming education by creating immersive experiences that were once impossible in traditional classrooms..."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Virtual Reality in Education: Immersive Learning Experiences | BrightPath Digital"
        description="Discover how VR transforms education with immersive experiences. Learn about VR applications across subjects, implementation strategies, and benefits for student engagement and retention."
        keywords="virtual reality education, VR learning, immersive education, educational technology, digital classroom, interactive learning, UK education innovation"
        url="/blog/vr-education-experiences"
        type="article"
        article={{
          author: "Dr. Alex Thompson",
          publishedTime: "2024-03-08T00:00:00Z",
          modifiedTime: "2024-03-08T00:00:00Z",
          section: "EdTech Innovation",
          tags: ["Virtual Reality", "Education Technology", "Immersive Learning", "Digital Innovation"]
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
              <Badge className="bg-primary text-primary-foreground">EdTech Innovation</Badge>
              <Badge variant="secondary">VR</Badge>
              <Badge variant="secondary">Immersive</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Virtual Reality in Education: Immersive Learning Experiences
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Dr. Alex Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 8, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={vrEducationImage} 
                alt="Students using VR headsets for educational experiences"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Virtual Reality is transforming education by creating immersive experiences that were once impossible in traditional classrooms. From walking through ancient Rome to exploring the human circulatory system from the inside, VR opens up unlimited possibilities for experiential learning.
            </p>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              The Power of Immersive Learning
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Virtual Reality leverages our natural learning processes by engaging multiple senses simultaneously. When students can see, hear, and interact with educational content in three-dimensional space, they form stronger memories and develop deeper understanding of complex concepts.
            </p>

            <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Why VR Enhances Learning</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    Enhanced Retention
                  </h4>
                  <p className="text-muted-foreground mb-4">Students retain up to 90% of information when learning through VR experiences compared to 10% from reading alone.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    Safe Exploration
                  </h4>
                  <p className="text-muted-foreground mb-4">Students can safely explore dangerous environments, historical events, or microscopic worlds without physical risks.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    Emotional Connection
                  </h4>
                  <p className="text-muted-foreground mb-4">Immersive experiences create emotional connections to learning material, making abstract concepts tangible and memorable.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    Personalized Pace
                  </h4>
                  <p className="text-muted-foreground mb-4">Students can learn at their own pace, repeating experiences or spending more time on challenging concepts.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary" />
              VR Applications Across Subjects
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Virtual Reality isn't limited to any single subject area. Its versatility makes it valuable across the entire curriculum, from humanities to STEM fields.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">🏛️ History & Social Studies</h4>
                <p className="text-muted-foreground mb-3">
                  Transport students to historical events, ancient civilizations, and cultural landmarks around the world.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Virtual field trips to museums and historical sites</li>
                  <li>• Immersive recreations of historical events</li>
                  <li>• Cultural exchange experiences with global classrooms</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">🔬 Science & Biology</h4>
                <p className="text-muted-foreground mb-3">
                  Explore microscopic worlds, conduct virtual experiments, and visualize complex scientific processes.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Journey through the human body systems</li>
                  <li>• Molecular and atomic structure visualization</li>
                  <li>• Virtual laboratory experiments and simulations</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">🌍 Geography & Earth Science</h4>
                <p className="text-muted-foreground mb-3">
                  Explore geographical features, weather patterns, and environmental ecosystems in immersive detail.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Virtual expeditions to extreme environments</li>
                  <li>• Interactive maps and topographical exploration</li>
                  <li>• Climate change and ecosystem simulations</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">🎨 Arts & Language</h4>
                <p className="text-muted-foreground mb-3">
                  Create and experience art in new dimensions while practicing languages in immersive cultural contexts.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 3D art creation and sculpture experiences</li>
                  <li>• Virtual conversation practice with native speakers</li>
                  <li>• Immersive storytelling and creative writing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              Implementation Strategies for Schools
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Successfully integrating VR into education requires careful planning, teacher training, and gradual implementation. Schools that approach VR adoption strategically see the best results.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Step-by-Step VR Implementation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Pilot Program</h4>
                    <p className="text-muted-foreground">Start with a small pilot program in one or two classrooms to test effectiveness and gather feedback.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Teacher Training</h4>
                    <p className="text-muted-foreground">Provide comprehensive training on VR technology, content creation, and classroom management strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Curriculum Integration</h4>
                    <p className="text-muted-foreground">Align VR experiences with existing curriculum standards and learning objectives for seamless integration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Gradual Expansion</h4>
                    <p className="text-muted-foreground">Based on pilot results, gradually expand VR implementation to additional classrooms and subjects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Continuous Assessment</h4>
                    <p className="text-muted-foreground">Regularly evaluate learning outcomes and adjust implementation strategies based on data and feedback.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Overcoming Implementation Challenges</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              While VR offers tremendous educational benefits, schools must address several challenges to ensure successful implementation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Common Challenges</h4>
                <div className="space-y-3">
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Cost Considerations</h5>
                    <p className="text-sm text-muted-foreground">VR equipment and software can require significant initial investment.</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Technical Support</h5>
                    <p className="text-sm text-muted-foreground">Schools need IT support for setup, maintenance, and troubleshooting.</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Content Quality</h5>
                    <p className="text-sm text-muted-foreground">Finding high-quality, curriculum-aligned VR content can be challenging.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Practical Solutions</h4>
                <div className="space-y-3">
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Flexible Funding</h5>
                    <p className="text-sm text-muted-foreground">Explore grants, partnerships, and leasing options to manage costs.</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Training Programs</h5>
                    <p className="text-sm text-muted-foreground">Invest in comprehensive teacher and IT staff training programs.</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-soft">
                    <h5 className="font-semibold text-foreground mb-1">Content Partnerships</h5>
                    <p className="text-sm text-muted-foreground">Partner with educational content providers and VR developers.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">The Future of VR in Education</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              As VR technology continues to advance and become more affordable, its role in education will only grow. Future developments in haptic feedback, eye tracking, and AI integration will create even more sophisticated and personalized learning experiences.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Improvement in student engagement with VR</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <p className="text-sm text-muted-foreground">Increase in information retention</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Student satisfaction with VR learning</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              The schools that begin exploring VR today will be best positioned to take advantage of tomorrow's innovations. By starting with small pilot programs and building expertise gradually, educators can prepare their students for a future where virtual and augmented reality are integral parts of learning and work.
            </p>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to Explore VR in Education?</h3>
              <p className="text-lg opacity-90 mb-6">
                Discover how immersive technology can transform your classroom experiences.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/demo">Request VR Demo</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Dr. Alex Thompson</h4>
                <p className="text-muted-foreground">
                  Dr. Thompson is a leading researcher in immersive educational technologies with a Ph.D. in Educational Technology. With over 10 years of experience in VR development for education, he has helped numerous schools successfully implement VR programs.
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
        message="The link to this VR Education article has been copied to your clipboard. Share this valuable resource about immersive learning experiences with your colleagues and networks."
        actionText="Copy Again"
        onAction={() => {
          navigator.clipboard.writeText(window.location.href);
          setShowSharePopup(false);
        }}
      />

      <Footer />
    </div>
  );
};

export default VREducationExperiences;