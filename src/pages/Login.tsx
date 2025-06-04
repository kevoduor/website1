
import { useMetaTags } from "@/hooks/useMetaTags";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Login = () => {
  useMetaTags('login');

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] flex items-center justify-center px-4" style={{ fontFeatureSettings: '"liga" off, "calt" off' }}>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-foreground">Heynia</Link>
          <p className="text-muted-foreground mt-2">Welcome back to your dental practice management</p>
        </div>

        <Card className="bg-card border-border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-foreground">Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              Sign In
            </Button>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="#" className="text-primary hover:underline">
                  Sign up for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>🔐 HIPAA Compliant & Secure</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
