
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Calendar, BarChart3, Smartphone } from "lucide-react";

const Index = () => {
  useMetaTags('homepage');

  const features = [
    {
      title: "Patient Scheduling",
      description: "Intuitive calendar with automated reminders"
    },
    {
      title: "Treatment Planning", 
      description: "Track, edit, and approve treatment plans in seconds"
    },
    {
      title: "Billing & Payments",
      description: "Integrated revenue cycle management and insurance claim tools"
    },
    {
      title: "Online Patient Portal",
      description: "Patients can book, pay, and message your office 24/7"
    },
    {
      title: "Teledentistry",
      description: "Secure, seamless virtual consults"
    },
    {
      title: "EHR Integration",
      description: "Real-time access to electronic health records"
    },
    {
      title: "AI-Powered Insights",
      description: "Optimize revenue and patient retention with predictive analytics"
    },
    {
      title: "Marketing Automation",
      description: "Send reviews, reactivation messages & promotions automatically"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            One Cloud. Endless Possibilities.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Heynia is the all-in-one, HIPAA-compliant dental practice management software built for growth—from small clinics to multi-location practices.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
            Start Free – No Credit Card Needed
          </Button>
        </div>
      </div>

      {/* Section 1: Built for Modern Dentistry */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built for Modern Dentistry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your dental office with Heynia's cloud-based software. From patient scheduling to billing and teledentistry, Heynia gives you everything you need to run and grow your practice—securely, from anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="text-green-600 flex-shrink-0" size={24} />
              <span className="text-gray-700">HIPAA-compliant dental software for dentists</span>
            </div>
            <div className="flex items-center space-x-3">
              <Smartphone className="text-green-600 flex-shrink-0" size={24} />
              <span className="text-gray-700">Mobile access for dentists on the go</span>
            </div>
            <div className="flex items-center space-x-3">
              <BarChart3 className="text-green-600 flex-shrink-0" size={24} />
              <span className="text-gray-700">Real-time analytics and AI-powered insights</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-green-600 flex-shrink-0" size={24} />
              <span className="text-gray-700">Designed for both small clinics and multi-location dental groups</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Features Table */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Run Your Entire Practice from One Platform
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Grow Smarter */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Grow Smarter, Not Harder
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Dentists trust Heynia to grow their practice—without adding admin work. Whether you're solo or scaling to new locations, Heynia adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌟</span>
              <span className="text-gray-700">Customizable dental practice management system</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌟</span>
              <span className="text-gray-700">Marketing tools to attract and retain patients</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌟</span>
              <span className="text-gray-700">Automated reminders that reduce no-shows</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌟</span>
              <span className="text-gray-700">Revenue cycle management built-in</span>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <p className="text-lg italic text-gray-700 mb-4">
                "Heynia helped us cut admin time by 40% and boost patient satisfaction!"
              </p>
              <p className="text-gray-600 font-medium">— Dr. L. Patel, DDS</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 4: Pricing */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Affordable Plans for Every Stage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Get premium features without premium pricing. Whether you're just starting or managing multiple locations, Heynia grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-blue-600">{plan.price}</CardDescription>
                  <CardDescription className="text-gray-600">Monthly</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Best For</p>
                  <p className="font-medium">{plan.bestFor}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center space-x-2">
              <span className="text-xl">💡</span>
              <span>All plans include core features, AI tools, and U.S. support.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Why Choose Heynia */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Dentists Choose Heynia
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">HIPAA-Compliant</h3>
              <p className="text-gray-600">Data privacy built in</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile-Ready</h3>
              <p className="text-gray-600">Manage from your phone or tablet</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Boost Communication</h3>
              <p className="text-gray-600">Text, email, and portal messaging in one place</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">Make decisions backed by data</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2">Insurance + Billing</h3>
              <p className="text-gray-600">Faster claims, fewer denials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Getting Started */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start in Minutes, Not Weeks
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            No setup fees. No contracts. No IT headaches. Just create an account and you're ready to go.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">🎥</span>
              <p className="text-gray-700">Free onboarding included</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">💬</span>
              <p className="text-gray-700">Live support when you need it</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">🔄</span>
              <p className="text-gray-700">Switching from another system? We'll handle the import.</p>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
            Start Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-gray-700" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Heynia</h3>
              <p className="text-gray-300 mb-2">📍 Hacienda, Oloitoktok Road, Kilimani, Nairobi</p>
              <p className="text-gray-300 mb-2">📧 hello@heynia.com</p>
              <p className="text-gray-300">📞 +254 755 792 377</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 mb-2">🔐 HIPAA & OSHA Ready</p>
              <p className="text-gray-300">🇺🇸 Built for U.S. Dental Practices</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
