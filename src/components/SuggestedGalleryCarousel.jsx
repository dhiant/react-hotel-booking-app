import React from "react";

// Import React Slick for Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Carousel.css";
import SuggestedCard from "./SuggestedCard";

// Icons for Carousel Arrow
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        color: "#404040",
        height: "2rem",
        width: "2rem",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Icon for left carousel arrow */}
      <MdArrowBackIos style={{ fontSize: "20px" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        color: "#404040",
        height: "2rem",
        width: "2rem",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Icon for right carousel arrow */}
      <MdArrowForwardIos style={{ fontSize: "20px" }} />
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
      {
        breakpoint: 800,
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
    <div className="carouselContainer">
      <Slider {...settings}>
        {imageSuggestedLocations.map((item) => (
          <SuggestedCard
            key={item.id}
            link={item.link}
            img={item.img}
            title={item.title}
            price={item.price}
            property={item.property}
            width="w-[340px]"
            height="h-[456px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default SuggestedGalleryCarousel;
