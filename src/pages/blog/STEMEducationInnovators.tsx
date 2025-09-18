import { ArrowLeft, Calendar, Clock, User, Share2, Beaker, Rocket, Lightbulb } from "lucide-react";
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
import stemCollaborationImage from "@/assets/blog-stem-collaboration.jpg";

const STEMEducationInnovators = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    shareArticle(
      "STEM Education: Inspiring the Next Generation of Innovators",
      "Discover how STEM education cultivates critical thinking, creativity, and problem-solving skills that prepare students for tomorrow's challenges. Learn about innovative teaching methods and inclusive strategies that make STEM accessible to all.",
      setShowSharePopup
    );
  };

  const articleData = {
    headline: "STEM Education: Inspiring the Next Generation of Innovators",
    description: "Discover how STEM education cultivates critical thinking, creativity, and problem-solving skills that prepare students for tomorrow's challenges. Learn about innovative teaching methods and inclusive strategies.",
    author: "Dr. Maria Gonzalez",
    datePublished: "2024-03-05T00:00:00Z",
    dateModified: "2024-03-05T00:00:00Z",
    image: "https://growbrightpath.com/blog-stem-collaboration.jpg",
    url: "https://growbrightpath.com/blog/stem-education-innovators",
    wordCount: 2400,
    articleBody: "STEM education has become increasingly important in preparing students for an innovation-driven economy..."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="STEM Education: Inspiring the Next Generation of Innovators | BrightPath Digital"
        description="Discover how STEM education cultivates critical thinking and innovation. Learn effective teaching methods that make science, technology, engineering, and math accessible to all students."
        keywords="STEM education, science teaching, technology in education, engineering for kids, math innovation, UK STEM programs, STEM teaching methods"
        url="/blog/stem-education-innovators"
        type="article"
        article={{
          author: "Dr. Maria Gonzalez",
          publishedTime: "2024-03-05T00:00:00Z",
          modifiedTime: "2024-03-05T00:00:00Z",
          section: "STEM Education",
          tags: ["STEM", "Innovation", "Science Education", "Technology"]
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
              <Badge className="bg-primary text-primary-foreground">STEM Education</Badge>
              <Badge variant="secondary">Innovation</Badge>
              <Badge variant="secondary">Science</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              STEM Education: Inspiring the Next Generation of Innovators
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Dr. Maria Gonzalez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={stemCollaborationImage} 
                alt="Students collaborating on STEM projects with digital tools"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              STEM education is more than just teaching science, technology, engineering, and mathematics—it's about cultivating curiosity, critical thinking, and problem-solving skills that will define the next generation of innovators. As our world becomes increasingly technology-driven, effective STEM education has never been more crucial.
            </p>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-primary" />
              Why STEM Education Matters
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The future economy will be built on STEM skills. From artificial intelligence to renewable energy, from biotechnology to space exploration, the challenges and opportunities of tomorrow require a workforce that thinks scientifically, innovates technologically, engineers solutions, and understands mathematical principles.
            </p>

            <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">The STEM Skills Advantage</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Cognitive Benefits</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Critical Thinking:</strong> Analyzing problems from multiple angles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Creative Problem-Solving:</strong> Finding innovative solutions to complex challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Logical Reasoning:</strong> Making connections between cause and effect</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Data Literacy:</strong> Understanding and interpreting quantitative information</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Career Opportunities</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>High-Demand Fields:</strong> Technology, healthcare, engineering, research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Competitive Salaries:</strong> STEM careers typically offer above-average compensation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Job Security:</strong> Growing demand for STEM professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Global Opportunities:</strong> STEM skills are valued worldwide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Beaker className="w-8 h-8 text-primary" />
              Making STEM Accessible and Engaging
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the biggest challenges in STEM education is making these subjects accessible and engaging for all students, regardless of their background or previous exposure to these fields. Success requires innovative teaching methods that connect abstract concepts to real-world applications.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  🎯 Project-Based Learning
                </h4>
                <p className="text-muted-foreground mb-4">
                  Students work on real-world projects that integrate multiple STEM disciplines, making learning relevant and engaging.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Example: Solar Car</h5>
                    <p className="text-muted-foreground">Physics, engineering, and math combined</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Example: App Development</h5>
                    <p className="text-muted-foreground">Computer science and user design</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-1">Example: Ecosystem Study</h5>
                    <p className="text-muted-foreground">Biology, chemistry, and data analysis</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  🤝 Collaborative Learning
                </h4>
                <p className="text-muted-foreground mb-4">
                  Team-based projects mirror real-world STEM work environments and help students develop communication and collaboration skills.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Diverse perspectives enhance problem-solving</li>
                  <li>• Peer teaching reinforces understanding</li>
                  <li>• Group dynamics prepare students for professional environments</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  🔬 Hands-On Experimentation
                </h4>
                <p className="text-muted-foreground mb-4">
                  Direct manipulation and experimentation help students understand scientific processes and develop research skills.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Laboratory experiments and field studies</li>
                  <li>• Maker spaces and fabrication labs</li>
                  <li>• Virtual simulations and modeling</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              Addressing Diversity and Inclusion in STEM
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Creating an inclusive STEM environment where all students can thrive requires intentional effort to address barriers and biases that have historically excluded certain groups from these fields.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Strategies for Inclusive STEM Education</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Representation Matters</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Highlight diverse STEM role models and professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use inclusive language and examples in curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Address stereotypes and misconceptions directly</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Accessible Learning</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provide multiple pathways to understanding concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Accommodate different learning styles and abilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Create supportive learning environments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Technology Integration in STEM</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Modern STEM education leverages technology not just as a tool, but as a medium for exploration, creation, and communication. From coding to 3D printing, technology opens new possibilities for STEM learning.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">💻</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Coding & Programming</h4>
                <p className="text-muted-foreground text-sm">Teaching computational thinking through programming languages and development platforms.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">🎲</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">3D Modeling & Printing</h4>
                <p className="text-muted-foreground text-sm">Bringing ideas to life through digital design and rapid prototyping technologies.</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Data Analysis Tools</h4>
                <p className="text-muted-foreground text-sm">Using software and platforms to collect, analyze, and visualize scientific data.</p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Building STEM Mindsets</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond technical skills, STEM education should cultivate mindsets that support lifelong learning and innovation. These include persistence, curiosity, and the willingness to learn from failure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Growth Mindset</h4>
                <p className="text-muted-foreground mb-4">
                  Encouraging students to view challenges as opportunities to learn and grow, rather than threats to their self-image.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Embrace mistakes as learning opportunities</li>
                  <li>• Focus on process over product</li>
                  <li>• Celebrate effort and improvement</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Scientific Inquiry</h4>
                <p className="text-muted-foreground mb-4">
                  Teaching students to ask questions, form hypotheses, and test ideas systematically.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Observe and question the world around them</li>
                  <li>• Design and conduct experiments</li>
                  <li>• Analyze results and draw conclusions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Measuring Success in STEM Education</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Effective STEM education goes beyond test scores to include creativity, collaboration, and real-world problem-solving abilities. Assessment should capture the full range of STEM skills students develop.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">76%</div>
                <p className="text-xs text-muted-foreground">Increase in STEM career interest</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">89%</div>
                <p className="text-xs text-muted-foreground">Improvement in problem-solving skills</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">68%</div>
                <p className="text-xs text-muted-foreground">Better collaboration abilities</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">94%</div>
                <p className="text-xs text-muted-foreground">Student engagement with STEM</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              The future belongs to those who can think critically, solve complex problems, and adapt to rapidly changing technologies. By making STEM education engaging, inclusive, and relevant, we prepare students not just for STEM careers, but for success in any field that requires innovation, analysis, and creative problem-solving.
            </p>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Inspire the Next Generation of Innovators</h3>
              <p className="text-lg opacity-90 mb-6">
                Discover comprehensive STEM education solutions that engage and inspire students.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/features">Explore STEM Tools</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Dr. Maria Gonzalez</h4>
                <p className="text-muted-foreground">
                  Dr. Gonzalez is a STEM education researcher and former high school science teacher with 18 years of experience. She specializes in inclusive STEM pedagogy and has published extensively on effective strategies for engaging underrepresented students in STEM fields.
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
          setShowSharePopup(false);
        }}
      />

      <Footer />
    </div>
  );
};

export default STEMEducationInnovators;