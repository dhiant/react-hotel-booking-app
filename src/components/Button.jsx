import React from "react";

const Button = ({ signIN }) => {
  return (
    <button className="bg-secondary px-4 py-2 leading-none rounded-sm mt-4 text-base">
      {signIN}
    </button>
  );
};

export default Button;
