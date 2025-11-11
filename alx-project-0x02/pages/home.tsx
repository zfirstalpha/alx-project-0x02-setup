import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "AI Tools", content: "Explore powerful AI tools designed to make your life easier." },
    { title: "Learning Hub", content: "Access tutorials and resources to boost your skills." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center py-12">
      <h1 className="text-4xl font-bold mb-10">Welcome to the Home Page 🏠</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        + Create New Post
      </button>

      <div className="flex flex-wrap justify-center gap-8">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
}
