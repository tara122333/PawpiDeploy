import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import YellowBanner from '../../Images/YellowBanner.png';
import Banner2 from '../../Images/Banner2.png';
import Banner4 from '../../Images/Banner 4.png';
import Banner5 from '../../Images/Banner 5.png';
import Banner6 from '../../Images/Banner 6.png';
import { NextArrow, PrevArrow } from "./ArrowCarousel";



const HeroCarousal = () => {
 
    const settings = {
      arrows: true,
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
    };

 const HeroCarouselData=[
        YellowBanner,Banner2,Banner5,Banner4,Banner6
 ]
  return (
    <Slider {...settings}>
    {
      HeroCarouselData.map((data)=>(
        <div className="h-96 w-full ">
          <img className="h-full w-full cursor-pointer " src={data} alt="CarouselImage" /></div>
      ))
    }
    </Slider>
  );
};
export default HeroCarousal;