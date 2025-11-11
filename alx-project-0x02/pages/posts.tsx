import React from 'react';
import Header from '@/components/layout/Header';

const Posts = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="text-gray-600">Here you can find all posts.</p>
      </div>
    </div>
  );
};

export default Posts;
