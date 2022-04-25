import React from "react";

const Card = (props) => {
  return (
    <div className="w-44 mt-5">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          alt="location"
          className="w-40 h-36  hover:opacity-80 "
        />
        <div className="text-start">
          <p className="pt-3 font-bold text-base">{props.title}</p>
          <p className="text-sm">{props.propertyCount}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
