import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

// ✅ Next.js data fetching
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
