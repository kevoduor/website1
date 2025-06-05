
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart3, Smartphone, Star, ArrowRight, Menu, X, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  useMetaTags('homepage');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter']" style={{ fontFeatureSettings: '"liga" off, "calt" off' }}>
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-foreground">Heynia</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-primary font-medium">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary/90">Login</Button>
              </Link>
              <ThemeToggle />
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
            <div className="md:hidden border-t border-border/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-primary block px-3 py-2 font-medium">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground block px-3 py-2">About</Link>
                <Link to="/login" className="block px-3 py-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">Login</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            One app,<br />endless possibilities
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered dental practice management that simplifies workflows, improves patient care, and makes a positive impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/login">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              <span>Cloud-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Heart className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Technology for Good
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We commit <span className="font-bold text-primary">10% of our annual revenue</span> to organizations working to end gender-based violence.
          </p>
          <div className="bg-primary/5 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-5xl font-bold text-primary mb-4">10%</div>
            <p className="text-foreground font-semibold">Annual Revenue Committed</p>
            <p className="text-sm text-muted-foreground mt-2">Supporting survivors and prevention efforts</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern platform built for dental practices that want to grow sustainably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patient Management</h3>
                <p className="text-muted-foreground">
                  Complete patient records and intelligent scheduling in one integrated system.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">AI Analytics</h3>
                <p className="text-muted-foreground">
                  Get insights that matter with intelligent reporting and revenue tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Mobile Access</h3>
                <p className="text-muted-foreground">
                  Access your practice data anywhere with our mobile-optimized platform.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Revenue Increase</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <p className="text-sm text-muted-foreground">Fewer No-Shows</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10hrs</div>
                <p className="text-sm text-muted-foreground">Weekly Time Savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Trusted by dental practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Heynia has transformed our practice. The AI insights helped us increase revenue by 30%."
                </p>
                <p className="text-foreground font-semibold">Dr. Sarah Johnson</p>
                <p className="text-muted-foreground text-sm">Family Dental Care</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The scheduling system reduced our no-shows significantly. Exactly what we needed."
                </p>
                <p className="text-foreground font-semibold">Dr. Michael Chen</p>
                <p className="text-muted-foreground text-sm">Smile Dental Group</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of dental professionals making a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/login">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 30-day free trial • Setup in 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Heynia</h3>
              <p className="text-muted-foreground mb-4">
                Empowering dental practices with purpose-driven technology.
              </p>
              <div className="text-muted-foreground space-y-1">
                <p>📍 Nairobi, Kenya</p>
                <p>📧 hello@heynia.com</p>
                <p>📞 +254 755 792 377</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><Link to="#" className="hover:text-foreground">Features</Link></li>
                  <li><Link to="#" className="hover:text-foreground">Pricing</Link></li>
                  <li><Link to="#" className="hover:text-foreground">Security</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                  <li><Link to="#" className="hover:text-foreground">Contact</Link></li>
                  <li><Link to="#" className="hover:text-foreground">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>🔐 HIPAA Compliant • 💜 Technology for Good</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
