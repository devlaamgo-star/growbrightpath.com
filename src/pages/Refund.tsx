import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Clock, Mail, Phone, CreditCard, AlertCircle } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Refund Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Refund 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our commitment to customer satisfaction includes a clear and fair refund policy.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Refund Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    <span>30-Day Money-Back Guarantee</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee for all paid subscription plans. If you're not completely satisfied with BrightPath Digital, you can request a full refund within 30 days of your initial purchase.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> The 30-day guarantee applies only to first-time subscribers and does not apply to renewal payments or add-on services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Refund Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Eligible for Full Refund</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Initial subscription purchases within 30 days</li>
                      <li>• Technical issues preventing platform access that cannot be resolved</li>
                      <li>• Unauthorized charges or billing errors</li>
                      <li>• Duplicate payments or processing errors</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Pro-rated Refunds</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Downgrades from higher-tier plans (unused portion refunded)</li>
                      <li>• Mid-cycle cancellations for annual subscriptions (remaining months)</li>
                      <li>• Service disruptions lasting more than 72 hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Non-Refundable</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Subscription renewals after the initial 30-day period</li>
                      <li>• Add-on services and premium features</li>
                      <li>• Training and professional services</li>
                      <li>• Custom development or integration work</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Refund Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">How to Request a Refund</h3>
                    <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                      <li>Contact our support team via email or phone (details below)</li>
                      <li>Provide your account information and reason for refund request</li>
                      <li>Our team will review your request within 2 business days</li>
                      <li>If approved, refunds will be processed within 5-10 business days</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Required Information</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Account email address</li>
                      <li>• Order/transaction number</li>
                      <li>• Reason for refund request</li>
                      <li>• Preferred refund method</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>Payment Method Refunds</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Credit Cards</h3>
                      <p>Refunds will be credited back to the original credit card used for payment. Processing time: 3-5 business days.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Bank Transfers</h3>
                      <p>Refunds will be transferred to the original bank account. Processing time: 5-10 business days.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Purchase Orders</h3>
                      <p>For institutional purchases, refunds will be processed according to your organization's billing cycle.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Cancellation vs. Refund</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Subscription Cancellation</h3>
                      <ul className="space-y-1">
                        <li>• You can cancel your subscription at any time</li>
                        <li>• Access continues until the end of your current billing period</li>
                        <li>• No refund for the current billing period (unless within 30-day guarantee)</li>
                        <li>• Automatic renewal is disabled</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Refund Request</h3>
                      <ul className="space-y-1">
                        <li>• Immediate cancellation with money returned</li>
                        <li>• Access may be terminated immediately upon processing</li>
                        <li>• Subject to eligibility criteria above</li>
                        <li>• Requires approval from our support team</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card border-warning/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    <span>Important Notes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Data Export:</strong> Before requesting a refund, ensure you've exported any important data as access will be terminated</li>
                    <li>• <strong>Processing Time:</strong> Refund processing times depend on your payment method and bank policies</li>
                    <li>• <strong>Currency:</strong> Refunds will be issued in the same currency as the original payment</li>
                    <li>• <strong>Taxes:</strong> Any applicable taxes paid will also be refunded</li>
                    <li>• <strong>Third-party Fees:</strong> We cannot refund transaction fees charged by payment processors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Contact Us for Refunds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>To request a refund or ask questions about our refund policy:</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-medium">Email:</span> director@growbrightpath.com
                          <div className="text-sm text-muted-foreground">Response time: Within 24 hours</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-medium">Phone:</span> +44 7537 181554
                          <div className="text-sm text-muted-foreground">Business hours: 9 AM - 6 PM GMT</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Tip:</strong> Before requesting a refund, consider reaching out to our support team. Many issues can be quickly resolved, and we're here to help you get the most out of BrightPath Digital.
                      </p>
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

export default Refund;