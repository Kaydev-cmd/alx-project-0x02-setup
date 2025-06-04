import React from "react";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const posts: React.FC = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default posts;
