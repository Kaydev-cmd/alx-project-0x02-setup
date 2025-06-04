import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, styles }) => {
  return (
    <button
      className={`bg-blue-600 px-3 w-auto h-[27px] text-white ${styles.shape}`}
    >
      {size}
    </button>
  );
};

export default Button;
