import React from "react";
import Button from "@/components/common/Button";

const about: React.FC = () => {
  return (
    <div className="text-xl font-extralight">
      <h1>About</h1>
      <div className="flex justify-around items-center mt-4">
        <Button size="small" styles={{ shape: "rounded-sm" }} />
        <Button size="medium" styles={{ shape: "rounded-md" }} />
        <Button size="large" styles={{ shape: "rounded-lg" }} />
      </div>
    </div>
  );
};

export default about;
