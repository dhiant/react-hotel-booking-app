import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-secondary px-4 py-4 font-bold leading-none rounded-sm text-base text-white hover:bg-primaryLight">
      {text}
    </button>
  );
};

export default Button;
