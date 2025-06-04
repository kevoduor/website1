
import { useMetaTags } from "@/hooks/useMetaTags";

const Index = () => {
  useMetaTags('homepage');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Heynia Dental Cloud</h1>
        <p className="text-xl text-gray-600 mb-4">
          HIPAA-Compliant Cloud-Based Dental Practice Management Software
        </p>
        <p className="text-lg text-gray-500">
          Complete dental software with patient scheduling, billing, teledentistry, and AI-powered insights
        </p>
      </div>
    </div>
  );
};

export default Index;
