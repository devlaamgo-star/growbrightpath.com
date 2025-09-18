import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
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
import digitalLearningImage from "@/assets/blog-digital-learning.jpg";

const FutureDigitalLearning = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    shareArticle(
      "The Future of Digital Learning: Transforming Education for the Digital Age",
      "Explore how emerging technologies like AI, VR, and blockchain are revolutionizing education. Discover the trends shaping digital learning and how institutions can prepare students for tomorrow's digital world.",
      setShowSharePopup
    );
  };

  const articleData = {
    headline: "The Future of Digital Learning: Transforming Education for the Digital Age",
    description: "Explore how emerging technologies like AI, VR, and blockchain are revolutionizing education. Discover the trends shaping digital learning and how institutions can prepare students for tomorrow's digital world.",
    author: "Dr. Sarah Johnson",
    datePublished: "2024-03-15T00:00:00Z",
    dateModified: "2024-03-15T00:00:00Z",
    image: "https://growbrightpath.com/blog-digital-learning.jpg",
    url: "https://growbrightpath.com/blog/future-digital-learning",
    wordCount: 2800,
    articleBody: "The landscape of education is undergoing a profound transformation as digital technologies reshape how we teach and learn..."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Future of Digital Learning: Transforming Education for the Digital Age | BrightPath Digital"
        description="Explore how emerging technologies like AI, VR, and blockchain are revolutionizing education. Discover digital learning trends and future educational innovations."
        keywords="future of education, digital learning trends, educational technology, AI in education, VR learning, UK digital education, online learning future"
        url="/blog/future-digital-learning"
        type="article"
        article={{
          author: "Dr. Sarah Johnson",
          publishedTime: "2024-03-15T00:00:00Z",
          modifiedTime: "2024-03-15T00:00:00Z",
          section: "Digital Learning",
          tags: ["Future Education", "Digital Learning", "Educational Technology", "Innovation"]
        }}
      />

      <StructuredData
        type="article"
        data={articleData}
      />

      <Navigation />
      
      <main>
        {/* Article Header */}
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
              <Badge className="bg-primary text-primary-foreground">Digital Learning</Badge>
              <Badge variant="secondary">Technology</Badge>
              <Badge variant="secondary">Innovation</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              The Future of Digital Learning: Transforming Education for the Digital Age
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Dr. Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={digitalLearningImage} 
                alt="Students collaborating with digital technology"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The landscape of education is undergoing a profound transformation. As we advance deeper into the digital age, traditional classroom models are evolving to embrace innovative technologies that enhance learning experiences and prepare students for an increasingly connected world.
            </p>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              The Digital Revolution in Education
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Digital learning platforms are no longer just supplementary tools—they've become integral components of modern education. From interactive whiteboards to AI-powered tutoring systems, technology is reshaping how we teach and learn.
            </p>

            <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Key Benefits of Digital Learning</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Personalized Learning Paths:</strong> AI algorithms adapt content to individual student needs and learning styles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Global Accessibility:</strong> Students can access quality education regardless of geographical location</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Real-time Analytics:</strong> Educators can track progress and identify areas for improvement instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Interactive Engagement:</strong> Multimedia content keeps students engaged and motivated</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              Emerging Technologies Shaping Education
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Artificial Intelligence</h4>
                <p className="text-muted-foreground">
                  AI-powered systems provide personalized tutoring, automated grading, and predictive analytics to enhance learning outcomes.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Virtual Reality</h4>
                <p className="text-muted-foreground">
                  VR creates immersive learning environments where students can explore historical sites, conduct virtual experiments, and visualize complex concepts.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Blockchain</h4>
                <p className="text-muted-foreground">
                  Secure credential verification and transparent academic records are revolutionizing how we validate educational achievements.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">IoT Integration</h4>
                <p className="text-muted-foreground">
                  Smart classrooms with connected devices create responsive learning environments that adapt to student behavior and preferences.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Preparing Students for Tomorrow
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The digital transformation of education isn't just about using new tools—it's about preparing students for a future where digital literacy is as fundamental as traditional literacy. Students today need to develop critical thinking skills for evaluating digital information, collaborate effectively in virtual environments, and adapt to rapidly changing technological landscapes.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Essential 21st Century Skills</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Digital Literacy</h4>
                  <p className="text-sm text-muted-foreground">Understanding and using technology effectively</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Critical Thinking</h4>
                  <p className="text-sm text-muted-foreground">Analyzing and evaluating digital information</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">Working effectively in digital teams</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Looking Ahead: The Next Decade</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              As we look toward the future, several trends will continue to shape digital learning. Adaptive learning systems will become more sophisticated, providing truly personalized educational experiences. Augmented reality will blend digital and physical learning environments seamlessly. And blockchain technology will create new models for credentialing and skill verification.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              The institutions that embrace these changes and invest in digital transformation will be best positioned to serve the needs of future learners. The question isn't whether digital learning will transform education—it's how quickly and effectively we can adapt to maximize its benefits for all students.
            </p>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to Transform Your Educational Institution?</h3>
              <p className="text-lg opacity-90 mb-6">
                Discover how BrightPath Digital can help you implement cutting-edge learning solutions.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/demo">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Dr. Sarah Johnson</h4>
                <p className="text-muted-foreground">
                  Dr. Johnson is a leading researcher in educational technology with over 15 years of experience in digital learning innovation. She holds a Ph.D. in Educational Psychology and has published extensively on the impact of technology in education.
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

export default FutureDigitalLearning;