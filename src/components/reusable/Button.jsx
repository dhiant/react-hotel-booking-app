import React from "react";

const Button = ({ text, fontWeight = "font-bold" }) => {
  return (
    <button
      className={`bg-secondary px-4 py-4 ${fontWeight} leading-none rounded-sm text-base text-white hover:bg-primaryLight`}
    >
      {text}
    </button>
  );
};

export default Button;
