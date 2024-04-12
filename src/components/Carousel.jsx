import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handlePrev = () => {
    this.setState((preview) => ({
      index: preview.index === 0 ? images.length - 1 : preview.index - 1,
    }));
  };

  handleNext = () => {
    this.setState((preview) => ({
      index: preview.index === images.length - 1 ? 0 : preview.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    return (
      <div className="main">
        <ArrowBackIosIcon className="arrow" onClick={this.handlePrev} />
        <div
          className="secondcon"
          style={{
            backgroundImage: `url(${images[index].img})`,
            height: "750px",
            width: "500px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>{images[index].title}</h1>
          <h2>{images[index].subtitle}</h2>
        </div>
        <ArrowForwardIosIcon className="arrow" onClick={this.handleNext} />
      </div>
    );
  }
}

export default Carousel;
