import { url } from "inspector";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Container } from "../../../styles/components/carousel"
// import { Container } from './styles';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div className="slid">1</div>
        <div className="slid">
          <h3>2</h3>
        </div>
        <div className="slid">
          <h3>3</h3>
        </div>
        <div className="slid">
          <h3>4</h3>
        </div>
        <div className="slid">
          <h3>5</h3>
        </div>
        <div className="slid">
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  );
};

export default Carousel;
