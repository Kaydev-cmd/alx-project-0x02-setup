import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">
        {name} ({username})
      </h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.suite}, {address.city},{" "}
        {address.zipcode}
      </p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
