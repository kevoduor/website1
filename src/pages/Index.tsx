
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart3, Smartphone, Star, ArrowRight, Menu, X, Heart, Shield, Users, Zap, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  useMetaTags('homepage');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter']" style={{ fontFeatureSettings: '"liga" off, "calt" off' }}>
      {/* Navigation */}
      <nav className="bg-background shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-foreground">Heynia</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-primary px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">About</Link>
                <Link to="/login" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">Login</Link>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-primary block px-3 py-2 text-base font-medium">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium">About</Link>
                <Link to="/login" className="bg-primary text-primary-foreground block px-3 py-2 rounded-lg text-base font-medium hover:bg-primary/90">Login</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            One app, endless possibilities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered dental practice management software that simplifies workflows, improves patient care, and grows your practice sustainably—while making a positive impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/login">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl shadow-lg">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl border-border">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>Cloud-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technology for Good
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Heynia, we believe technology should be a force for good—empowering businesses and helping shape a more just world. We commit <strong className="text-primary">10% of our annual revenue</strong> to organizations working to end gender-based violence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Purpose</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nia, meaning "purpose" in Swahili, drives everything we do. We're not just building software—we're building a better world for dental professionals and their communities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Making Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you choose Heynia, you're standing with a company that leads with purpose. Together, we're addressing the global crisis affecting 1 in 3 women worldwide.
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4">10%</div>
                <p className="text-xl font-semibold text-foreground mb-2">Annual Revenue Committed</p>
                <p className="text-muted-foreground">
                  Directly supporting organizations working to prevent gender-based violence and support survivors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need to run your practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, AI-powered platform built for dental practices that want to simplify workflows, improve patient engagement, and grow sustainably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patient Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete patient records, intelligent scheduling, and treatment planning in one integrated system that learns and adapts to your practice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get insights that matter. Track practice performance, predict revenue trends, and understand patient engagement with intelligent reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Mobile Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access your practice data anywhere with our mobile-optimized platform. Manage appointments, review charts, and stay connected on the go.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Workflow Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automate appointment reminders, billing processes, and follow-ups. Reduce administrative burden and focus on what matters most—patient care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Revenue Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimize your practice's financial performance with intelligent billing, insurance management, and revenue cycle optimization tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Time Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save hours every week with streamlined processes, intelligent automation, and intuitive workflows designed by dental professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Why Dental Practices Choose Heynia</h3>
              <p className="text-lg text-muted-foreground">Join thousands of dental professionals who trust Heynia to grow their practice</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Average Revenue Increase</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <p className="text-sm text-muted-foreground">Reduction in No-Shows</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10hrs</div>
                <p className="text-sm text-muted-foreground">Weekly Time Savings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Trusted by dental practices worldwide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Heynia has transformed how we manage our practice. The AI insights have helped us increase our revenue by 30%, and knowing we're supporting a great cause makes it even better."
                </p>
                <p className="text-foreground font-semibold">Dr. Sarah Johnson</p>
                <p className="text-muted-foreground text-sm">Family Dental Care</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The patient scheduling system is intuitive and has reduced our no-shows significantly. The platform grows with less stress and more efficiency—exactly what they promised."
                </p>
                <p className="text-foreground font-semibold">Dr. Michael Chen</p>
                <p className="text-muted-foreground text-sm">Smile Dental Group</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "HIPAA compliance made easy, powerful features, and a company with real purpose. We can focus on patient care while Heynia handles everything else seamlessly."
                </p>
                <p className="text-foreground font-semibold">Dr. Emily Rodriguez</p>
                <p className="text-muted-foreground text-sm">Modern Dentistry</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of dental professionals who trust Heynia to streamline their operations, grow their practice, and make a positive impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/login">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl shadow-lg">
                Start Your Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl border-border">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 30-day free trial • Setup in under 5 minutes
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Heynia</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Empowering dental practices with intelligent software that drives growth, improves patient care, and makes a positive impact on the world.
              </p>
              <div className="text-muted-foreground">
                <p className="mb-2">📍 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
                <p className="mb-2">📧 hello@heynia.com</p>
                <p>📞 +254 755 792 377</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Features</Link></li>
                <li><Link to="#" className="hover:text-foreground">Pricing</Link></li>
                <li><Link to="#" className="hover:text-foreground">Security</Link></li>
                <li><Link to="#" className="hover:text-foreground">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><Link to="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link to="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link to="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>🔐 HIPAA & OSHA Ready • 🇺🇸 Built for U.S. Dental Practices • 💜 Technology for Good</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
