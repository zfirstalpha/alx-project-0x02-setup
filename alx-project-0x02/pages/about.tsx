import React from 'react';
import Button from '@/components/common/Button'; // ✅ default import

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <Button size="small" shape="rounded-sm" label="Small Button" />
      <Button size="medium" shape="rounded-md" label="Medium Button" />
      <Button size="large" shape="rounded-full" label="Large Button" />
    </div>
  );
};

export default About;
