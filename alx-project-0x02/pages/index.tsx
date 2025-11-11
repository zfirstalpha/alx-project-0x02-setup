import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Welcome to ALX Project 2!</h1>
        <p className="text-lg">Your Next.js + Tailwind + TypeScript setup is ready.</p>
      </main>
    </div>
  );
}
