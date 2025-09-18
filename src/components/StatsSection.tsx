import { useEffect, useState } from "react";
import { Users, School, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      icon: Users,
      number: 25000,
      suffix: "+",
      label: "Active Users",
      description: "Educators and students",
      color: "text-primary"
    },
    {
      icon: School,
      number: 1200,
      suffix: "+",
      label: "Canadian Schools",
      description: "Across all provinces and territories",
      color: "text-secondary-accent"
    },
    {
      icon: Award,
      number: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "From educator feedback",
      color: "text-accent"
    },
    {
      icon: Globe,
      number: 15,
      suffix: "M+",
      label: "Learning Moments",
      description: "Captured and shared",
      color: "text-warning"
    }
  ];

  const AnimatedNumber = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, number]);

    return (
      <span className="font-heading font-bold text-4xl md:text-5xl">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Trusted by the Canadian Education Community
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators who are transforming learning experiences with BrightPath Digital.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-soft">
                  <stat.icon className={`w-8 h-8 ${stat.color.replace('text-', 'text-white')}`} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-white">
                    <AnimatedNumber 
                      number={stat.number} 
                      suffix={stat.suffix} 
                      isVisible={isVisible} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {stat.label}
                  </h3>
                  
                  <p className="text-white/80 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-white/90 text-lg mb-6">
            Ready to join the BrightPath Digital community?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 inline-block"
            >
              Start Your Free Trial
            </Link>
            <Link 
              to="/request-demo" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 inline-block"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;