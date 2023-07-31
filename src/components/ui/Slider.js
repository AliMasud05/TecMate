import { Carousel } from "antd";
import React from "react";
import sliderImg1 from "../../assets/1.jpg";
import sliderImg2 from "../../assets/7.jpg";
import sliderImg3 from "../../assets/3.webp";
import Image from "next/image";
const HomeSlider = () => {
  return (
    // <div className="sm:mt-5 w-full">
    //   <Carousel autoplay effect="fade">
    //     <div className="">
    //       <Image
    //         src={sliderImg1}
    //         alt=""
    //         className="mx-auto h-[600px] container max-w-5xl"
    //       />
    //     </div>
    //     <div>
    //       <Image
    //         src={sliderImg2}
    //         alt=""
    //         className="mx-auto container max-w-5xl h-[600px]"
    //       />
    //     </div>
    //     <div>

    //     </div>
    //   </Carousel>
    // </div>

    <Carousel>
      <Image
        src={sliderImg3}
        alt=""
        className="mx-auto container max-w-5xl h-[600px]"
      />
      <Image
        src={sliderImg2}
        alt=""
        className="mx-auto container max-w-5xl h-[600px]"
      />
      <Image
        src={sliderImg3}
        alt=""
        className="mx-auto container max-w-5xl h-[600px]"
      />
    </Carousel>
  );
};

export default HomeSlider;
