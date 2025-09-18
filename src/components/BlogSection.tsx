import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import digitalLearningImage from "@/assets/blog-digital-learning.jpg";
import interactiveTeachingImage from "@/assets/blog-interactive-teaching.jpg";
import familyLearningImage from "@/assets/blog-family-learning.jpg";

const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Digital Learning: Transforming Education for the Digital Age",
      excerpt: "Discover how digital learning platforms are revolutionizing education and preparing students for tomorrow's challenges.",
      image: digitalLearningImage,
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Digital Learning",
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
      url: "/blog/family-learning-connections"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary">
            Latest Insights
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Educational 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Insights & Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and success stories from the world of digital education.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group shadow-medium border-border bg-gradient-card hover:shadow-large transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Link to={post.url} className="group">
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to={post.url}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-between group mt-4 hover:bg-primary/10"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;