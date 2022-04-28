import React from "react";

const GuestDetails = (props) => {
  return (
    <div>
      <a href={`${props.link}`}>
        <div>
          <p className="text-sm">{props.title}</p>
          <p className="text-xs text-textLight">{props.location}</p>
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-semibold">
            Starting from NPR {props.cost}
          </h1>
          <div className="flex gap-2 items-center mt-1">
            <div className="text-white text-sm font-medium w-[28px] h-[28px] bg-primary flex items-center justify-center rounded-t-md rounded-r-md rounded-br-none rounded-bl-md">
              {props.rating}
            </div>
            <p className="font-medium text-sm">{props.feedback}</p>
            <p color="text-textLight text-xs leading-3">{props.reviews}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GuestDetails;
