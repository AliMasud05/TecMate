import { Carousel } from "antd";
import React from "react";
import sliderImg1 from "../../assets/slider-img-1.jpg";
import sliderImg2 from "../../assets/slider-img-2.jpg";
import sliderImg3 from "../../assets/slider-img-3.jpg";
import Image from "next/image";
const HomeSlider = () => {
  return (
    <div className="sm:mt-5">
      <Carousel autoplay effect="fade">
        <div className="">
          <Image src={sliderImg1} alt="" className="mx-auto container max-w-5xl h-auto" />
        </div>
        <div>
        <Image src={sliderImg2} alt="" className="mx-auto container max-w-5xl h-auto" />
        </div>
        <div>
        <Image src={sliderImg3} alt="" className="mx-auto container max-w-5xl h-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
