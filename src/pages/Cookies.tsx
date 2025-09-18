import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings, Clock, Shield, ToggleLeft } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Cookie Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Cookie 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn how we use cookies to improve your experience on BrightPath Digital.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cookie className="w-5 h-5 text-primary" />
                    <span>What Are Cookies?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our platform.
                  </p>
                  <p className="text-muted-foreground">
                    Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may affect your ability to use some features of our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Types of Cookies We Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span>Essential Cookies</span>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Authentication and login session management</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Shopping cart and form data</li>
                      <li>• Load balancing and performance optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-primary" />
                      <span>Functional Cookies</span>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies enable enhanced functionality and personalization.
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Language and region preferences</li>
                      <li>• Theme and display settings</li>
                      <li>• Recently viewed content</li>
                      <li>• Accessibility preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <ToggleLeft className="w-4 h-4 text-secondary-accent" />
                      <span>Analytics Cookies</span>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Page views and user journeys</li>
                      <li>• Feature usage and engagement metrics</li>
                      <li>• Performance monitoring</li>
                      <li>• Error tracking and debugging</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Cookie className="w-4 h-4 text-warning" />
                      <span>Marketing Cookies</span>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      These cookies are used to deliver relevant advertising and track campaign effectiveness.
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Personalized content recommendations</li>
                      <li>• Advertising campaign tracking</li>
                      <li>• Social media integration</li>
                      <li>• Third-party advertising services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may use third-party services that set cookies on our behalf. These services help us provide better functionality and understand our users' needs.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Analytics Services</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Google Analytics: Website traffic and user behavior analysis</li>
                        <li>• Hotjar: User experience insights and heatmaps</li>
                        <li>• Mixpanel: Product analytics and user engagement tracking</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Communication Tools</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Intercom: Customer support and messaging</li>
                        <li>• Mailchimp: Email marketing and newsletters</li>
                        <li>• Zoom: Video conferencing integration</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Payment Processing</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Stripe: Secure payment processing</li>
                        <li>• PayPal: Alternative payment methods</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Managing Your Cookie Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Browser Settings</h3>
                    <p className="text-muted-foreground mb-2">
                      You can control cookies through your browser settings:
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• <strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                      <li>• <strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                      <li>• <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                      <li>• <strong>Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Our Cookie Preferences</h3>
                    <p className="text-muted-foreground">
                      When you first visit our website, you'll see a cookie banner where you can choose which types of cookies to accept. You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.
                    </p>
                  </div>
                  
                  <div className="bg-warning/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Blocking certain cookies may impact your experience on our platform. Essential cookies cannot be disabled as they are necessary for the website to function properly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Cookie Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Different cookies have different lifespans:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Session Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        These are temporary cookies that expire when you close your browser. They're used for essential functions like keeping you logged in during your session.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Persistent Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        These cookies remain on your device for a set period or until you delete them. They remember your preferences between visits and typically expire after:
                      </p>
                      <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
                        <li>• Functional cookies: 30 days to 2 years</li>
                        <li>• Analytics cookies: 1 to 2 years</li>
                        <li>• Marketing cookies: 30 days to 2 years</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Updates to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Updating the "Last Updated" date</li>
                    <li>• Sending email notifications for significant changes</li>
                    <li>• Displaying a notification banner on our website</li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> director@growbrightpath.com</p>
                    <p><strong>Phone:</strong> +44 7537 181554</p>
                    <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
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

export default Cookies;