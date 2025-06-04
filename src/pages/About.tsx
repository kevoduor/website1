
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Shield, Users, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  useMetaTags('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-['Inter']" style={{ fontFeatureSettings: '"liga" off, "calt" off' }}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">Heynia</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/about" className="text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
                <Link to="/login" className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700">Login</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Home</Link>
                <Link to="/about" className="text-emerald-600 block px-3 py-2 text-base font-medium">About</Link>
                <Link to="/login" className="bg-emerald-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-emerald-700">Login</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Heynia
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Technology for good. Software with purpose.
          </p>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-emerald-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why we exist
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Heynia, we believe that technology should be a force for good—empowering businesses and helping shape a more just world.
            </p>
            <br />
            <p className="text-xl text-gray-600 leading-relaxed">
              Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence (GBV), a global crisis that affects 1 in 3 women in their lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* How We Live Our Purpose Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              How we live our purpose
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              But just as importantly, we commit <span className="font-bold text-emerald-600">10% of our annual revenue</span> to organizations working on the frontlines to prevent GBV and support survivors.
            </p>
            <br />
            <p className="text-xl text-gray-600 leading-relaxed">
              This mission is deeply personal and embedded in the way we operate.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-purple-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What we offer
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              When you choose Heynia, you're not just getting powerful software—you're standing with a company that leads with purpose and gives back.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Join our mission
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Be part of a community that believes technology can create positive change in the world.
              </p>
              <Link to="/login">
                <Button size="lg" className="text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Heynia</h3>
              <p className="text-gray-300 mb-4 text-lg">📍 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              <p className="text-gray-300 mb-4 text-lg">📧 hello@heynia.com</p>
              <p className="text-gray-300 text-lg">📞 +254 755 792 377</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 mb-4 text-lg">🔐 HIPAA & OSHA Ready</p>
              <p className="text-gray-300 text-lg">🇺🇸 Built for U.S. Dental Practices</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
