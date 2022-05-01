import React from "react";

const SuggestedCard = (props) => {
  return (
    <div className={`relative overflow-hidden`}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          alt="lovely nature"
          className={`rounded-sm ${props.width} ${props.height} bottom-10 brightness-90`}
        />
        <div className={`absolute bottom-2 text-white left-3`}>
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="text-base">{props.property}</p>
          <p className={`text-base ${props.display}`}>
            Deals start at <span className="font-bold">{props.price}</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default SuggestedCard;
