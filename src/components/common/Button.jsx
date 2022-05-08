import React from "react";

const Button = ({ text, fontWeight = "font-bold", handleSearch, padding }) => {
  return (
    <button
      className={`bg-secondary ${padding} ${fontWeight} leading-none rounded-sm text-base text-white hover:bg-primaryLight`}
      onClick={handleSearch}
    >
      {text}
    </button>
  );
};

export default Button;
