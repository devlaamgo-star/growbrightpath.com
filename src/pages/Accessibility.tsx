import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Ear, Mouse, Keyboard, Clock, CheckCircle2 } from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary">
              Accessibility Statement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Accessible 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Education</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              BrightPath Digital is committed to ensuring digital accessibility for all users, including those with disabilities.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Accessibility Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Our Commitment to Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    BrightPath Digital is committed to providing an inclusive educational platform that is accessible to all users, regardless of their abilities or disabilities. We believe that everyone deserves equal access to quality educational tools and resources.
                  </p>
                  <p className="text-muted-foreground">
                    We are continuously working to improve the accessibility of our platform and services to ensure compliance with recognized accessibility standards and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Accessibility Standards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our platform is designed to meet or exceed the following accessibility standards:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">WCAG 2.1 Level AA</h3>
                        <p className="text-sm text-muted-foreground">Web Content Accessibility Guidelines 2.1 at Level AA conformance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Section 508</h3>
                        <p className="text-sm text-muted-foreground">U.S. federal accessibility requirements for technology</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">AODA</h3>
                        <p className="text-sm text-muted-foreground">Accessibility for Ontarians with Disabilities Act compliance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">EN 301 549</h3>
                        <p className="text-sm text-muted-foreground">European accessibility standard for ICT products and services</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-primary" />
                      <span>Visual Accessibility</span>
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• High contrast color schemes and customizable themes</li>
                      <li>• Scalable fonts and adjustable text size options</li>
                      <li>• Alternative text for all images and visual content</li>
                      <li>• Clear visual focus indicators for navigation</li>
                      <li>• Screen reader compatible design and markup</li>
                      <li>• Color contrast ratios exceeding WCAG AA standards</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Ear className="w-4 h-4 text-secondary-accent" />
                      <span>Auditory Accessibility</span>
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Captions and transcripts for all video content</li>
                      <li>• Visual indicators for audio cues and notifications</li>
                      <li>• Adjustable volume controls for multimedia content</li>
                      <li>• Text-based alternatives to audio-only content</li>
                      <li>• Sign language interpretation options (where available)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Mouse className="w-4 h-4 text-accent" />
                      <span>Motor Accessibility</span>
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Full keyboard navigation support</li>
                      <li>• Customizable click targets and button sizes</li>
                      <li>• Adjustable timing for time-sensitive content</li>
                      <li>• Voice control and speech recognition compatibility</li>
                      <li>• Switch navigation support</li>
                      <li>• Drag-and-drop alternatives</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Keyboard className="w-4 h-4 text-warning" />
                      <span>Cognitive Accessibility</span>
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clear and consistent navigation structure</li>
                      <li>• Simple, plain language throughout the platform</li>
                      <li>• Helpful error messages and guidance</li>
                      <li>• Distraction-free reading modes</li>
                      <li>• Customizable interface complexity levels</li>
                      <li>• Progress indicators and breadcrumb navigation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Assistive Technology Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our platform is designed to work seamlessly with assistive technologies, including:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Screen Readers</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• JAWS (Windows)</li>
                        <li>• NVDA (Windows)</li>
                        <li>• VoiceOver (macOS/iOS)</li>
                        <li>• TalkBack (Android)</li>
                        <li>• Orca (Linux)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Input Devices</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Alternative keyboards</li>
                        <li>• Head pointers and eye-tracking</li>
                        <li>• Switch navigation systems</li>
                        <li>• Voice recognition software</li>
                        <li>• Touch screen adaptations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Browser Extensions</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Read&Write</li>
                        <li>• ClaroRead</li>
                        <li>• Immersive Reader</li>
                        <li>• Mercury Reader</li>
                        <li>• High contrast extensions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Mobile Accessibility</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• iOS Accessibility features</li>
                        <li>• Android Accessibility Suite</li>
                        <li>• Mobile screen readers</li>
                        <li>• Voice control apps</li>
                        <li>• Magnification tools</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Testing and Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We regularly test our platform for accessibility compliance through:
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automated accessibility scanning tools</li>
                    <li>• Manual testing with assistive technologies</li>
                    <li>• User testing with individuals who have disabilities</li>
                    <li>• Regular accessibility audits by third-party experts</li>
                    <li>• Continuous monitoring and improvement processes</li>
                    <li>• Staff training on accessibility best practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Getting Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you need assistance using our platform or encounter accessibility barriers, we're here to help:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Accessibility Support</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Email: accessibility@growbrightpath.com</li>
                        <li>• Phone: +44 7537 181554</li>
                        <li>• Live chat: Available during business hours</li>
                        <li>• Response time: Within 24 hours</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Alternative Formats</h3>
                      <p className="text-muted-foreground text-sm">
                        We can provide information and documentation in alternative formats such as large print, braille, audio, or accessible electronic formats upon request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Feedback and Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We welcome your feedback on the accessibility of BrightPath Digital. Your input helps us identify areas for improvement and prioritize our accessibility efforts.
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Ways to provide feedback:</strong>
                    </p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Send an email to accessibility@growbrightpath.com</li>
                      <li>• Use our online feedback form</li>
                      <li>• Contact our support team directly</li>
                      <li>• Participate in our user research studies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Please include:</strong> A description of the accessibility issue, the web page or feature affected, the assistive technology you're using, and your contact information if you'd like a response.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border bg-gradient-card">
                <CardHeader>
                  <CardTitle>Ongoing Improvements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Accessibility is an ongoing commitment. We continuously work to improve our platform through:
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Regular accessibility reviews of new features and updates</li>
                    <li>• Staff training and awareness programs</li>
                    <li>• Collaboration with accessibility consultants and disability advocates</li>
                    <li>• Implementation of user feedback and suggestions</li>
                    <li>• Staying current with evolving accessibility standards and best practices</li>
                    <li>• Quarterly accessibility assessments and improvements</li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    We are committed to making BrightPath Digital more accessible with each update and appreciate your patience as we continue to improve.
                  </p>
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

export default Accessibility;