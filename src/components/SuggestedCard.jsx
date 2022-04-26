import React from "react";

const SuggestedCard = (props) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={props.img}
        alt=""
        className="rounded-md w-[340px] h-[426px] bottom-10 brightness-90"
      />
      <div className="absolute bottom-2 text-white left-3">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="text-base">{props.property}</p>
        <p className="text-base">
          Deals start at <span className="font-bold">{props.price}</span>
        </p>
      </div>
    </div>
  );
};

export default SuggestedCard;
