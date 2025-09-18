import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, Mail, Phone, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Terms of 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Please read these terms carefully before using BrightPath Digital services.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>Agreement to Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    By accessing and using BrightPath Digital ("Service"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") apply to all users of the Service, including educators, students, parents, and administrators.
                  </p>
                  <p className="text-muted-foreground">
                    If you do not agree with any part of these terms, then you may not access the Service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Service Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    BrightPath Digital is an educational technology platform that provides:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Digital portfolio creation and management tools</li>
                    <li>• Communication features between educators and families</li>
                    <li>• Assessment and progress tracking capabilities</li>
                    <li>• Curriculum-aligned educational resources</li>
                    <li>• Analytics and reporting tools for educational insights</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>User Accounts and Responsibilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Account Creation</h3>
                      <ul className="space-y-1">
                        <li>• You must provide accurate and complete information when creating an account</li>
                        <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                        <li>• You must notify us immediately of any unauthorized use of your account</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Acceptable Use</h3>
                      <ul className="space-y-1">
                        <li>• Use the Service only for lawful educational purposes</li>
                        <li>• Respect the privacy and rights of other users</li>
                        <li>• Do not share inappropriate, harmful, or offensive content</li>
                        <li>• Comply with all applicable laws and regulations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Prohibited Activities</h3>
                      <ul className="space-y-1">
                        <li>• Attempting to gain unauthorized access to other accounts</li>
                        <li>• Uploading malicious software or code</li>
                        <li>• Interfering with the Service's functionality</li>
                        <li>• Violating intellectual property rights</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Subscription and Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Subscription Plans</h3>
                      <ul className="space-y-1">
                        <li>• Various subscription tiers are available with different features and pricing</li>
                        <li>• Subscription fees are billed in advance on a monthly or annual basis</li>
                        <li>• Free trial periods may be offered for certain plans</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Payment Processing</h3>
                      <ul className="space-y-1">
                        <li>• Payments are processed securely through third-party payment providers</li>
                        <li>• You authorize us to charge your chosen payment method for applicable fees</li>
                        <li>• We accept major credit cards, bank transfers, and purchase orders</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Cancellation and Refunds</h3>
                      <ul className="space-y-1">
                        <li>• You may cancel your subscription at any time</li>
                        <li>• Cancellation takes effect at the end of your current billing period</li>
                        <li>• Refunds are subject to our Refund Policy (see separate policy)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Content and Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Your Content</h3>
                      <ul className="space-y-1">
                        <li>• You retain ownership of content you upload to the Service</li>
                        <li>• You grant us a license to use your content to provide the Service</li>
                        <li>• You are responsible for ensuring you have rights to upload content</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Our Content</h3>
                      <ul className="space-y-1">
                        <li>• The Service and its content are protected by intellectual property laws</li>
                        <li>• You may not copy, modify, or distribute our proprietary content</li>
                        <li>• Educational resources are licensed for use within the platform only</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Data Protection and Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We are committed to protecting your privacy and the privacy of students. Our data handling practices are governed by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Our Privacy Policy (see separate document)</li>
                    <li>• Applicable data protection laws (PIPEDA, FERPA)</li>
                    <li>• Educational privacy standards and best practices</li>
                    <li>• Strict security measures and access controls</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card border-warning/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <span>Limitation of Liability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The Service is provided "as is" without warranties of any kind. To the maximum extent permitted by law:
                    </p>
                    <ul className="space-y-2">
                      <li>• We do not guarantee uninterrupted or error-free service</li>
                      <li>• We are not liable for indirect, incidental, or consequential damages</li>
                      <li>• Our total liability is limited to the amount paid for the Service</li>
                      <li>• You agree to indemnify us against claims arising from your use of the Service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may update these Terms from time to time. We will notify you of significant changes by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sending an email to your registered address</li>
                    <li>• Posting a notice on our platform</li>
                    <li>• Updating the "Last Updated" date</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about these Terms of Service, please contact us:</p>
                    
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

export default Terms;