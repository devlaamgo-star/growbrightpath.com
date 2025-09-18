import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                BrightPath Digital
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming learning experiences across Canada through innovative digital education solutions.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>105 Southwood Rd, London SE9 3QH</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+44 7537 181554</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>director@growbrightpath.com</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/teachers" className="text-muted-foreground hover:text-primary transition-colors">
                  For Teachers
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-muted-foreground hover:text-primary transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/families" className="text-muted-foreground hover:text-primary transition-colors">
                  For Families
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CreditCard className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Accepted payment methods</span>
              <div className="flex items-center gap-2 overflow-x-auto [&>*]:shrink-0">
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">VISA</span>
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">Mastercard</span>
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">Amex</span>
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">PayPal</span>
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">Apple Pay</span>
                <span className="rounded-md px-2 py-1 bg-muted text-foreground border border-border text-[11px] font-medium">Google Pay</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 BrightPath Digital Ltd. All rights reserved. Company Number: 16701497</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
