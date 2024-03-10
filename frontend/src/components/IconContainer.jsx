import React from "react";

const IconContainer = ({ iconm, text }) => {
  const IconName = [
    {
      icon: "FaShuttleVan",
      text: "Airport shuttle",
    },
    {
      icon: "FaShuttleVan",
      text: "Airport shuttle",
    },
    {
      icon: "FaShuttleVan",
      text: "Airport shuttle",
    },
    {
      icon: "FaShuttleVan",
      text: "Airport shuttle",
    },
    {
      icon: "FaShuttleVan",
      text: "Airport shuttle",
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {IconName.map((icon) => (
        <icon.icon className="fill-[#008009] w-5 h-5" />
      ))}
      {/* <icon className="fill-[#008009] w-5 h-5" />
      {text} */}
    </div>
  );
};

export default IconContainer;
