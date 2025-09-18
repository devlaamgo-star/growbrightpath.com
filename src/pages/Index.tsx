import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import UserTypesSection from "@/components/UserTypesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  const organizationData = {
    name: "BrightPath Digital Ltd",
    url: "https://growbrightpath.com",
    logo: "https://growbrightpath.com/logo.png",
    description: "Transform learning experiences with innovative digital education solutions. Connecting educators, students, and families across the UK.",
    address: {
      streetAddress: "105 Southwood Rd",
      addressLocality: "London",
      postalCode: "SE9 3QH",
      addressCountry: "GB"
    },
    contactPoint: {
      telephone: "+44 7537 181554",
      contactType: "customer service",
      email: "director@growbrightpath.com"
    },
    sameAs: [
      "https://www.facebook.com/brightpathdigital",
      "https://www.linkedin.com/company/brightpath-digital",
      "https://twitter.com/brightpath_digital"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="BrightPath Digital - Transform Learning Experiences | Educational Technology Platform"
        description="Empower educators, engage students, and connect families with BrightPath Digital's innovative learning platform. Trusted by 25,000+ UK educators for enhanced classroom experiences."
        keywords="digital learning platform, educational technology, UK education, classroom management, student portfolios, family engagement, teacher tools, learning management system"
        url="/"
        type="website"
      />

      <StructuredData
        type="organization"
        data={organizationData}
      />

      <StructuredData
        type="website"
        data={{}}
      />

      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <UserTypesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
