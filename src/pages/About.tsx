
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Shield, Users, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = () => {
  useMetaTags('about');
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
                <Link to="/" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/about" className="text-primary px-3 py-2 text-sm font-medium">About</Link>
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
                <Link to="/" className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium">Home</Link>
                <Link to="/about" className="text-primary block px-3 py-2 text-base font-medium">About</Link>
                <Link to="/login" className="bg-primary text-primary-foreground block px-3 py-2 rounded-lg text-base font-medium hover:bg-primary/90">Login</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            About Heynia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Technology for good. Software with purpose.
          </p>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why we exist
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
            </p>
            <br />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* How We Live Our Purpose Section */}
      <div className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              How we live our purpose
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              But just as importantly, we commit <span className="font-bold text-primary">10% of our annual revenue</span> to organizations working on the frontlines to prevent GBV and support survivors.
            </p>
            <br />
            <p className="text-xl text-muted-foreground leading-relaxed">
              This mission is deeply personal and embedded in the way we operate.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What we offer
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card border-0 shadow-xl rounded-2xl">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Join our mission
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Be part of a community that believes technology can create positive change in the world.
              </p>
              <Link to="/login">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl shadow-lg">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Heynia</h3>
              <p className="text-muted-foreground mb-4 text-lg">📍 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              <p className="text-muted-foreground mb-4 text-lg">📧 hello@heynia.com</p>
              <p className="text-muted-foreground text-lg">📞 +254 755 792 377</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground mb-4 text-lg">🔐 HIPAA & OSHA Ready</p>
              <p className="text-muted-foreground text-lg">🇺🇸 Built for U.S. Dental Practices</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
