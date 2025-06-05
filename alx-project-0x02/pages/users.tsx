import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users?.map(
            (
              {
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                key={key}
                name={name}
                username={username}
                email={email}
                address={address}
                phone={phone}
                website={website}
                id={id}
                company={company}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default users;
