import Button from "@/components/common/Button";
import React from "react";

const about: React.FC = () => {
  return (
    <div className="text-xl font-extralight">
      <h1>About</h1>
      <div className="flex justify-around items-center mt-4">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md" />
        <Button title="Large Rounded-lg" styles="text-lg rounded-lg" />
        <Button
          title="Extra-Large Rounded-full"
          styles="text-xl rounded-full"
        />
      </div>
    </div>
  );
};

export default about;
