import React from "react";
import Card from "./Card";

const Gallery = (props) => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <h1 className="text-2xl font-bold mt-6">{props.heading}</h1>
      <p className="text-base">{props.subHeading}</p>
      <div className="flex gap-4 flex-wrap">
        {props.imageGallery.map((item) => (
          <Card
            key={item.id}
            link={item.link}
            img={item.img}
            title={item.title}
            propertyCount={item.propertyCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
