import React from "react";

// Import React Slick for Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import SuggestedCard from "./SuggestedCard";

// Icons for Carousel Arrow
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`bg-red-600 ${className}`} onClick={onClick}>
      {/* Icon for left carousel arrow */}
      <MdArrowBackIos style={{ color: "#303030" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* Icon for right carousel arrow */}
      <MdArrowForwardIos style={{ color: "#303030" }} />
    </div>
  );
}

const SuggestedGalleryCarousel = ({ imageSuggestedLocations }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1080,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     infinite: true,
      //   },
      // },
      // {
      //   breakpoint: 670,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 506,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 335,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        {imageSuggestedLocations.map((item) => (
          <SuggestedCard
            key={item.id}
            link={item.link}
            img={item.img}
            title={item.title}
            price={item.price}
            property={item.property}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SuggestedGalleryCarousel;
