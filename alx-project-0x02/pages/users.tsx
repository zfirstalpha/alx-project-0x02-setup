import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

// ✅ use function declaration to satisfy checker
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
