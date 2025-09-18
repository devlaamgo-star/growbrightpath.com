import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Clock, CheckCircle2, AlertTriangle, Smartphone } from "lucide-react";

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Payment Methods
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Secure 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Payment Options</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Multiple secure payment methods to make subscribing to BrightPath Digital convenient and safe.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Payment Methods Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Credit Cards */}
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>Credit & Debit Cards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    We accept all major credit and debit cards for secure, instant payment processing.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Accepted Cards</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Visa</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Mastercard</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>American Express</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Discover</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Debit Cards with Visa/MC logos</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Processing Details</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Processing Time:</strong> Instant</li>
                        <li>• <strong>Auto-renewal:</strong> Supported</li>
                        <li>• <strong>Currency:</strong> CAD, USD, GBP, EUR</li>
                        <li>• <strong>Security:</strong> PCI DSS Level 1 compliant</li>
                        <li>• <strong>3D Secure:</strong> Supported for added security</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Transfers */}
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Bank Transfers & Direct Debit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    For larger organizations or institutions preferring bank transfers, we offer direct payment options.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Wire Transfer</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Available for annual subscriptions</li>
                        <li>• Minimum order value: $500 CAD</li>
                        <li>• Processing time: 3-5 business days</li>
                        <li>• Invoice required before payment</li>
                        <li>• Ideal for institutional purchases</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Pre-Authorized Debit</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Available for Canadian bank accounts</li>
                        <li>• Lower processing fees</li>
                        <li>• Automatic monthly/annual billing</li>
                        <li>• 30-day advance notice for changes</li>
                        <li>• Cancellation anytime</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Orders */}
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Purchase Orders & Institutional Billing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We accommodate institutional purchasing processes for schools, districts, and educational organizations.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Purchase Order Process</h3>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Contact our sales team for a formal quote</li>
                        <li>Submit your purchase order with quote reference</li>
                        <li>We'll process and activate your subscription</li>
                        <li>Invoice sent according to your billing preferences</li>
                        <li>Payment due within 30 days of invoice date</li>
                      </ol>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Requirements for PO</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Minimum order value: $1,000 CAD annually</li>
                        <li>• Net 30 payment terms (negotiable for large orders)</li>
                        <li>• Valid organizational contact information</li>
                        <li>• Authorized signatory approval</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Digital Wallets */}
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span>Digital Wallets & Alternative Payments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Convenient digital payment options for quick and secure transactions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Available Options</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Apple Pay</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Google Pay</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>PayPal</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Shop Pay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Benefits</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• One-click checkout experience</li>
                        <li>• Enhanced security with biometrics</li>
                        <li>• No need to enter card details</li>
                        <li>• Instant payment confirmation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security & Compliance */}
              <Card className="shadow-medium border-border bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Security & Compliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Your payment information is protected by industry-leading security measures.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Security Features</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 256-bit SSL encryption</li>
                        <li>• PCI DSS Level 1 compliance</li>
                        <li>• Tokenization of payment data</li>
                        <li>• Fraud detection systems</li>
                        <li>• Secure vault storage</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Compliance Standards</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• SOC 2 Type II certified</li>
                        <li>• GDPR compliant</li>
                        <li>• PIPEDA compliant</li>
                        <li>• Regular security audits</li>
                        <li>• ISO 27001 aligned</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Information */}
              <Card className="shadow-medium border-border bg-gradient-card border-warning/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <span>Important Payment Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Billing Cycles</h3>
                      <ul className="space-y-1">
                        <li>• Monthly subscriptions: Charged on the same day each month</li>
                        <li>• Annual subscriptions: Charged annually on renewal date</li>
                        <li>• Free trials: No charge during trial period</li>
                        <li>• Pro-rated billing: For mid-cycle plan changes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Failed Payments</h3>
                      <ul className="space-y-1">
                        <li>• Automatic retry: 3 attempts over 10 days</li>
                        <li>• Email notifications: Sent before account suspension</li>
                        <li>• Grace period: 7 days after final retry</li>
                        <li>• Account suspension: If payment cannot be processed</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Currency & Taxes</h3>
                      <ul className="space-y-1">
                        <li>• Prices displayed in your local currency when available</li>
                        <li>• Applicable taxes (GST/HST/VAT) added at checkout</li>
                        <li>• Exchange rates: Updated daily for international transactions</li>
                        <li>• Tax receipts: Available in your account dashboard</li>
                      </ul>
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

export default PaymentMethods;