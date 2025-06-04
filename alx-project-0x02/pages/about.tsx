import React from "react";
import Button from "@/components/common/Button";

const about: React.FC = () => {
  return (
    <div className="text-xl font-extralight">
      <h1>About</h1>
      <div className="flex justify-around items-center mt-4">
        <Button
          size="Small Rounded-sm"
          styles={{ shape: "text-sm rounded-sm" }}
        />
        <Button
          size="Medium Rounded-md"
          styles={{ shape: "text-base rounded-md" }}
        />
        <Button
          size="Large Rounded-lg"
          styles={{ shape: "text-lg rounded-lg" }}
        />
        <Button
          size="Extra-Large Rounded-full"
          styles={{ shape: "text-xl rounded-xl" }}
        />
      </div>
    </div>
  );
};

export default about;
