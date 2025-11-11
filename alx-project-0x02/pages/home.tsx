import Card from "@/components/common/Card";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center py-12">
      <h1 className="text-4xl font-bold mb-10">Welcome to the Home Page 🏠</h1>

      <div className="flex flex-wrap justify-center gap-8">
        <Card
          title="AI Tools"
          content="Explore powerful AI tools designed to make your life easier and more efficient."
        />
        <Card
          title="Learning Hub"
          content="Access high-quality tutorials and resources to boost your tech skills."
        />
        <Card
          title="Community"
          content="Join our active community and connect with other learners around the world."
        />
      </div>
    </div>
  );
}
