import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [imgScroll, setImgScroll] = useState(0);

  const handleNext = () => {
    setImgScroll((prevImgScroll) => (prevImgScroll + 1) % images.length);
  };

  const handlePrev = () => {
    setImgScroll(
      (prevImgScroll) => (prevImgScroll - 1 + images.length) % images.length
    );
  };

  return (
    <div className="main">
      <ArrowBackIosIcon className="arrow" onClick={handlePrev} />
      <div
        className="secondcon"
        style={{
          backgroundImage: `url(${images[imgScroll].img})`,
          height: "750px",
          width: "500px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>{images[imgScroll].title}</h1>
        <h2>{images[imgScroll].subtitle}</h2>
      </div>
      <ArrowForwardIosIcon className="arrow" onClick={handleNext} />
    </div>
  );
};

export default Carousel;
