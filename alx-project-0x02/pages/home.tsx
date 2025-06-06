import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

const home: React.FC = () => {
  const cardData: CardProps[] = [
    {
      title: "Welcome to SoloForge",
      content: "A platform where you build, learn, and grow autonomously.",
    },
    {
      title: "Next.js + Tailwind",
      content: "Master modern web development using the best tools.",
    },
    {
      title: "Reusable Components",
      content: "Create scalable UI eith component-driven architecture.",
    },
  ];
  const [posts, setPosts] = useState<PostData[]>([
    {
      title: "Welcome to SoloForge",
      content: "A platform where you build, learn, and grow autonomously.",
    },
    {
      title: "Next.js + Tailwind",
      content: "Master modern web development using the best tools.",
    },
    {
      title: "Reusable Components",
      content: "Create scalable UI eith component-driven architecture.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Featured Topics</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add New Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </div>
  );
};

export default home;
