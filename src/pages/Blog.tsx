import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import digitalLearningImage from "@/assets/blog-digital-learning.jpg";
import interactiveTeachingImage from "@/assets/blog-interactive-teaching.jpg";
import familyLearningImage from "@/assets/blog-family-learning.jpg";
import vrEducationImage from "@/assets/blog-vr-education.jpg";
import stemCollaborationImage from "@/assets/blog-stem-collaboration.jpg";
import teacherTrainingImage from "@/assets/blog-teacher-training.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Learning: Transforming Education for the Digital Age",
      excerpt: "Discover how digital learning platforms are revolutionizing education and preparing students for tomorrow's challenges.",
      image: digitalLearningImage,
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Digital Learning",
      tags: ["Technology", "Innovation", "Future"],
      url: "/blog/future-digital-learning"
    },
    {
      id: 2,
      title: "Interactive Teaching Methods That Boost Student Engagement",
      excerpt: "Explore proven interactive teaching strategies that increase student participation and improve learning outcomes.",
      image: interactiveTeachingImage,
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Teaching Methods",
      tags: ["Engagement", "Teaching", "Classroom"],
      url: "/blog/interactive-teaching-methods"
    },
    {
      id: 3,
      title: "Supporting Family Learning: Building Strong Home-School Connections",
      excerpt: "Learn how to create effective partnerships between families and schools to enhance student success.",
      image: familyLearningImage,
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Family Engagement",
      tags: ["Parents", "Collaboration", "Support"],
      url: "/blog/family-learning-connections"
    },
    {
      id: 4,
      title: "Virtual Reality in Education: Immersive Learning Experiences",
      excerpt: "Explore how VR technology is creating unprecedented opportunities for immersive educational experiences.",
      image: vrEducationImage,
      author: "Dr. Alex Thompson",
      date: "March 8, 2024",
      readTime: "9 min read",
      category: "EdTech Innovation",
      tags: ["VR", "Technology", "Immersive"],
      url: "/blog/vr-education-experiences"
    },
    {
      id: 5,
      title: "STEM Education: Inspiring the Next Generation of Innovators",
      excerpt: "Discover effective strategies for making STEM subjects engaging and accessible to all students.",
      image: stemCollaborationImage,
      author: "Dr. Maria Gonzalez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "STEM Education",
      tags: ["STEM", "Innovation", "Science"],
      url: "/blog/stem-education-innovators"
    },
    {
      id: 6,
      title: "Professional Development: Empowering Educators for Success",
      excerpt: "Learn about the latest professional development opportunities that help teachers excel in modern education.",
      image: teacherTrainingImage,
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Professional Development",
      tags: ["Training", "Teachers", "Growth"],
      url: "/blog/teacher-professional-development"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const blogWebsiteData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BrightPath Digital Education Blog",
    "description": "Latest insights on education technology, teaching strategies, and digital learning innovations from BrightPath Digital experts.",
    "url": "https://growbrightpath.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "BrightPath Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growbrightpath.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": new Date(post.date).toISOString(),
      "url": `https://growbrightpath.com${post.url}`,
      "image": `https://growbrightpath.com${post.image}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Education Blog - Digital Learning Insights | BrightPath Digital"
        description="Discover the latest trends in digital education, teaching strategies, and EdTech innovations. Expert insights from educators transforming classrooms worldwide."
        keywords="education blog, digital learning trends, teaching strategies, EdTech insights, classroom innovation, UK education, educational technology blog"
        url="/blog"
        type="website"
      />

      <StructuredData
        type="website"
        data={blogWebsiteData}
      />

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-soft py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Education
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and innovations in education technology
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            
            <Link 
              to={featuredPost.url}
              className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">
                Explore our latest insights on education, technology, and teaching strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  to={post.url}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {post.date}
                      </div>
                      
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-primary rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Get the latest education trends and insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;