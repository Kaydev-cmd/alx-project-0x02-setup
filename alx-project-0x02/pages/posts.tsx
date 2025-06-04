import React from "react";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Posts</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts?.map(({ title, content, userId }: PostProps, key: number) => (
            <PostCard
              title={title}
              content={content}
              userId={userId}
              key={key}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default posts;
