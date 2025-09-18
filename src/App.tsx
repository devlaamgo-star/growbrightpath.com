import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Families from "./pages/Families";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FutureDigitalLearning from "./pages/blog/FutureDigitalLearning";
import InteractiveTeachingMethods from "./pages/blog/InteractiveTeachingMethods";
import FamilyLearningConnections from "./pages/blog/FamilyLearningConnections";
import VREducationExperiences from "./pages/blog/VREducationExperiences";
import STEMEducationInnovators from "./pages/blog/STEMEducationInnovators";
import TeacherProfessionalDevelopment from "./pages/blog/TeacherProfessionalDevelopment";
import Support from "./pages/Support";
import ScheduleDemo from "./pages/ScheduleDemo";
import RequestDemo from "./pages/RequestDemo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import PaymentMethods from "./pages/PaymentMethods";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import Integrations from "./pages/Integrations";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/families" element={<Families />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/future-digital-learning" element={<FutureDigitalLearning />} />
          <Route path="/blog/interactive-teaching-methods" element={<InteractiveTeachingMethods />} />
          <Route path="/blog/family-learning-connections" element={<FamilyLearningConnections />} />
          <Route path="/blog/vr-education-experiences" element={<VREducationExperiences />} />
          <Route path="/blog/stem-education-innovators" element={<STEMEducationInnovators />} />
          <Route path="/blog/teacher-professional-development" element={<TeacherProfessionalDevelopment />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/support" element={<Support />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
