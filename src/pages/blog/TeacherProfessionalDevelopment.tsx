import { ArrowLeft, Calendar, Clock, User, Share2, GraduationCap, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SuccessPopup } from "@/components/ui/success-popup";
import { shareArticle } from "@/utils/shareUtils";
import teacherTrainingImage from "@/assets/blog-teacher-training.jpg";
import { useState } from "react";

const TeacherProfessionalDevelopment = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    shareArticle(
      "Professional Development: Empowering Educators for Success",
      "Discover effective professional development strategies that empower educators and enhance teaching practices.",
      setShowSharePopup
    );
  };

  const articleData = {
    headline: "Professional Development: Empowering Educators for Success",
    description: "Discover effective professional development strategies that empower educators and enhance teaching practices. Learn about continuous learning benefits and building supportive systems.",
    author: "James Wilson",
    datePublished: "2024-03-03T00:00:00Z",
    dateModified: "2024-03-03T00:00:00Z",
    image: "https://growbrightpath.com/blog-teacher-training.jpg",
    url: "https://growbrightpath.com/blog/teacher-professional-development",
    wordCount: 2200,
    articleBody: "In today's rapidly evolving educational landscape, continuous professional development isn't just beneficial for teachers—it's essential..."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional Development: Empowering Educators for Success | BrightPath Digital"
        description="Discover effective professional development strategies that empower educators. Learn about continuous learning benefits, building supportive systems, and modern training approaches."
        keywords="teacher professional development, educator training, professional learning, teacher growth, educational leadership, UK teacher development, teaching skills"
        url="/blog/teacher-professional-development"
        type="article"
        article={{
          author: "James Wilson",
          publishedTime: "2024-03-03T00:00:00Z",
          modifiedTime: "2024-03-03T00:00:00Z",
          section: "Professional Development",
          tags: ["Professional Development", "Teacher Training", "Education Leadership", "Teaching Skills"]
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
              <Badge className="bg-primary text-primary-foreground">Professional Development</Badge>
              <Badge variant="secondary">Training</Badge>
              <Badge variant="secondary">Growth</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Professional Development: Empowering Educators for Success
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>James Wilson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 3, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={teacherTrainingImage} 
                alt="Teachers in professional development workshop"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In today's rapidly evolving educational landscape, continuous professional development isn't just beneficial for teachers—it's essential. As new technologies emerge and pedagogical approaches evolve, educators need ongoing support to stay current, effective, and inspired in their teaching practice.
            </p>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              The Importance of Continuous Learning
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Teaching is a profession that demands lifelong learning. Research shows that teachers who engage in regular professional development are more effective in the classroom, have higher job satisfaction, and are more likely to remain in the profession long-term.
            </p>

            <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Benefits of Professional Development</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">For Educators</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Enhanced Skills:</strong> Stay current with best practices and new methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Increased Confidence:</strong> Build expertise in new areas and technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Career Advancement:</strong> Open doors to leadership and specialization opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Professional Network:</strong> Connect with peers and experts in the field</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">For Students</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Improved Outcomes:</strong> Better teaching leads to enhanced student achievement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Engaging Experiences:</strong> Teachers bring fresh ideas and energy to the classroom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Modern Skills:</strong> Exposure to current technologies and methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Inspired Learning:</strong> Passionate teachers create motivated learners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Types of Professional Development
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Effective professional development comes in many forms, from formal courses to informal peer collaboration. The key is finding the right mix of learning opportunities that fit individual needs and schedules.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  🎓 Formal Training Programs
                </h4>
                <p className="text-muted-foreground mb-4">
                  Structured courses, workshops, and certification programs that provide comprehensive coverage of specific topics.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Graduate Courses</h5>
                    <p className="text-muted-foreground">Advanced degrees and specialized certifications</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Workshops</h5>
                    <p className="text-muted-foreground">Hands-on training sessions and seminars</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Conferences</h5>
                    <p className="text-muted-foreground">Industry events and educational symposiums</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  💻 Online Learning
                </h4>
                <p className="text-muted-foreground mb-4">
                  Flexible, self-paced learning opportunities that can be accessed anytime, anywhere.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Massive Open Online Courses (MOOCs)</li>
                  <li>• Webinar series and virtual workshops</li>
                  <li>• Educational podcasts and video tutorials</li>
                  <li>• Interactive online platforms and simulations</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  🤝 Collaborative Learning
                </h4>
                <p className="text-muted-foreground mb-4">
                  Peer-to-peer learning opportunities that leverage the collective wisdom of the teaching community.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Professional Learning Communities (PLCs)</li>
                  <li>• Mentorship programs and coaching relationships</li>
                  <li>• Peer observation and feedback sessions</li>
                  <li>• Educational book clubs and study groups</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Creating a Culture of Growth
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Successful professional development requires more than just providing opportunities—it needs institutional support and a culture that values continuous improvement and innovation.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Building Supportive Systems</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Leadership Support</h4>
                    <p className="text-muted-foreground">School administrators must prioritize and actively support teacher development through time, resources, and encouragement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Time and Resources</h4>
                    <p className="text-muted-foreground">Provide dedicated time for professional development and adequate funding for training programs and materials.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Collaborative Environment</h4>
                    <p className="text-muted-foreground">Foster a culture where teachers feel safe to experiment, make mistakes, and share insights with colleagues.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Recognition and Incentives</h4>
                    <p className="text-muted-foreground">Acknowledge and reward teachers who pursue professional development and implement new practices.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Technology in Professional Development</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Technology has revolutionized professional development, making high-quality training more accessible and affordable than ever before. From virtual reality simulations to AI-powered coaching, technology offers new ways to learn and grow.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">📱</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Mobile Learning</h4>
                <p className="text-muted-foreground text-sm">Access professional development content on-the-go through mobile apps and responsive platforms.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">🎮</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Gamification</h4>
                <p className="text-muted-foreground text-sm">Engage in learning through game-like elements, badges, and progress tracking systems.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">🤖</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">AI Coaching</h4>
                <p className="text-muted-foreground text-sm">Receive personalized feedback and recommendations based on individual learning patterns and goals.</p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Measuring Professional Development Impact</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Effective professional development programs track their impact through multiple measures, from teacher satisfaction to student outcomes. This data helps refine and improve future training initiatives.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Immediate Indicators</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Participant satisfaction and engagement levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Knowledge gained and skills acquired</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Confidence in implementing new practices</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Long-term Outcomes</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Changes in classroom practice and instruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student engagement and achievement improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Teacher retention and career advancement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">92%</div>
                <p className="text-xs text-muted-foreground">Teacher satisfaction with PD programs</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">78%</div>
                <p className="text-xs text-muted-foreground">Implementation of new strategies</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">65%</div>
                <p className="text-xs text-muted-foreground">Improvement in student outcomes</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">89%</div>
                <p className="text-xs text-muted-foreground">Teacher retention rate increase</p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">The Future of Professional Development</h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              As education continues to evolve, so too must our approaches to professional development. The future will likely see more personalized, just-in-time learning opportunities that adapt to individual teacher needs and circumstances. Virtual reality will enable immersive practice environments, while artificial intelligence will provide personalized coaching and feedback.
            </p>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Invest in Your Professional Growth</h3>
              <p className="text-lg opacity-90 mb-6">
                Discover comprehensive professional development resources designed for modern educators.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/teachers">Explore Teacher Resources</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">JW</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">James Wilson</h4>
                <p className="text-muted-foreground">
                  James is a professional development specialist with 14 years of experience designing and implementing teacher training programs. He holds a Master's degree in Educational Leadership and is passionate about helping educators grow and succeed in their careers.
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
        message="The link to this Professional Development article has been copied to your clipboard. Share these valuable insights about empowering educators with your teaching community."
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

export default TeacherProfessionalDevelopment;