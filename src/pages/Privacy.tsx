import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Mail, Phone } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Your Privacy 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Name, email address, and contact information</li>
                      <li>• School or organization details</li>
                      <li>• Educational role and professional information</li>
                      <li>• Account preferences and settings</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Educational Data</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Student portfolios and learning materials</li>
                      <li>• Assessment results and progress tracking</li>
                      <li>• Communication records between educators and families</li>
                      <li>• Usage analytics to improve our services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Technical Information</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Device information and browser type</li>
                      <li>• IP address and location data</li>
                      <li>• Cookies and usage tracking</li>
                      <li>• Platform interaction and feature usage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-muted-foreground">
                    <p>• <strong>Service Delivery:</strong> To provide and improve our educational platform services</p>
                    <p>• <strong>Communication:</strong> To send important updates, newsletters, and support messages</p>
                    <p>• <strong>Personalization:</strong> To customize your experience and provide relevant content</p>
                    <p>• <strong>Analytics:</strong> To understand usage patterns and improve platform functionality</p>
                    <p>• <strong>Security:</strong> To protect our platform and users from fraud and security threats</p>
                    <p>• <strong>Legal Compliance:</strong> To meet our legal obligations and regulatory requirements</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Data Protection & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement industry-standard security measures to protect your personal information:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                      <li>• <strong>Access Controls:</strong> Strict role-based access to personal information</li>
                      <li>• <strong>Regular Audits:</strong> Ongoing security assessments and compliance reviews</li>
                      <li>• <strong>Data Minimization:</strong> We only collect information necessary for our services</li>
                      <li>• <strong>Secure Servers:</strong> Data hosted on secure, Canada-based servers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="space-y-2">
                      <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                      <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                      <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                      <li>• <strong>Portability:</strong> Export your data in a machine-readable format</li>
                      <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li>• <strong>Restriction:</strong> Limit how we process your information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Student Privacy (FERPA & PIPEDA Compliance)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We are committed to protecting student privacy in accordance with applicable laws:
                    </p>
                    <ul className="space-y-2">
                      <li>• Student records are only accessible to authorized educators and parents/guardians</li>
                      <li>• We do not sell, rent, or share student information with third parties for marketing</li>
                      <li>• Parents have the right to access and review their child's educational records</li>
                      <li>• Students' personally identifiable information is securely stored and transmitted</li>
                      <li>• We maintain detailed logs of who accesses student information and when</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="space-y-2">
                      <li>• Maintain your login session and preferences</li>
                      <li>• Analyze platform usage to improve functionality</li>
                      <li>• Provide personalized content and recommendations</li>
                      <li>• Ensure platform security and prevent fraud</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser preferences. However, disabling cookies may limit platform functionality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>director@growbrightpath.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+44 7537 181554</span>
                      </div>
                    </div>
                    
                    <p className="text-sm">
                      We will respond to your privacy inquiries within 30 days of receipt.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;