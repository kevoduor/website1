
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Calendar, BarChart3, Smartphone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  useMetaTags('homepage');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Patient Scheduling",
      description: "Intuitive calendar with automated reminders",
      icon: Calendar
    },
    {
      title: "Treatment Planning", 
      description: "Track, edit, and approve treatment plans in seconds",
      icon: Users
    },
    {
      title: "Billing & Payments",
      description: "Integrated revenue cycle management and insurance claim tools",
      icon: BarChart3
    },
    {
      title: "Online Patient Portal",
      description: "Patients can book, pay, and message your office 24/7",
      icon: Smartphone
    },
    {
      title: "Teledentistry",
      description: "Secure, seamless virtual consults",
      icon: Shield
    },
    {
      title: "EHR Integration",
      description: "Real-time access to electronic health records",
      icon: BarChart3
    },
    {
      title: "AI-Powered Insights",
      description: "Optimize revenue and patient retention with predictive analytics",
      icon: BarChart3
    },
    {
      title: "Marketing Automation",
      description: "Send reviews, reactivation messages & promotions automatically",
      icon: Users
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$99",
      bestFor: "Small Clinics & Startups"
    },
    {
      name: "Professional", 
      price: "$249",
      bestFor: "Growing Practices"
    },
    {
      name: "Premium",
      price: "$349", 
      bestFor: "Multi-Location Clinics"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']" style={{ fontFeatureSettings: '"liga" off, "calt" off' }}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Heynia</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</Link>
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
                <Link to="/about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</Link>
                <Link to="/login" className="bg-emerald-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-emerald-700">Login</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            One app, endless possibilities
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Heynia is the all-in-one, HIPAA-compliant dental practice management software built for growth—from small clinics to multi-location practices.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg">
            Start Free – No Credit Card Needed
          </Button>
        </div>
      </div>

      {/* Section 1: Built for Modern Dentistry */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Dentistry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your dental office with Heynia's cloud-based software. From patient scheduling to billing and teledentistry, Heynia gives you everything you need to run and grow your practice—securely, from anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <span className="text-gray-700 font-medium">HIPAA-compliant dental software for dentists</span>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <span className="text-gray-700 font-medium">Mobile access for dentists on the go</span>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
              <span className="text-gray-700 font-medium">Real-time analytics and AI-powered insights</span>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="text-orange-600" size={24} />
              </div>
              <span className="text-gray-700 font-medium">Designed for both small clinics and multi-location dental groups</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Features */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Run Your Entire Practice from One Platform
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-xl">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Testimonial */}
      <div className="py-20 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grow Smarter, Not Harder
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Dentists trust Heynia to grow their practice—without adding admin work. Whether you're solo or scaling to new locations, Heynia adapts to your workflow.
          </p>

          <Card className="max-w-2xl mx-auto bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-12 text-center">
              <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "Heynia helped us cut admin time by 40% and boost patient satisfaction!"
              </p>
              <p className="text-gray-600 font-semibold text-lg">— Dr. L. Patel, DDS</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 4: Pricing */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Affordable Plans for Every Stage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get premium features without premium pricing. Whether you're just starting or managing multiple locations, Heynia grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">Monthly</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Best For</p>
                  <p className="font-semibold text-lg">{plan.bestFor}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl">💡</span>
              <span>All plans include core features, AI tools, and U.S. support.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-12 bg-gray-700" />
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

export default Index;
