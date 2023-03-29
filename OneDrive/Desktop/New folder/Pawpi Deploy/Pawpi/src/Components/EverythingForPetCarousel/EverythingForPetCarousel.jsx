import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Litter from '../../Images/litter.png';
import Food from '../../Images/food2.png';
import Toys from '../../Images/toys2.png';
import Treats from '../../Images/treats.png';

const EverythingForPetCarousel = () => {
 
    const settings = {
      arrows: true,
      dots:false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
    };

    const EverythingForPetDetails=[
        Litter,Food,Toys,Treats,Food,Toys
    ];

    return (
    <Slider {...settings}>
    {
      EverythingForPetDetails.map((data)=>(
            <div className="h-48 w-full">
                <div className="h-full w-full flex items-center justify-center">
                    <img src={data} 
                    alt="EverythingForPet"
                    className="h-44 w-auto"
                    />
                </div>
            </div>
      ))
    }
    </Slider>
  );
};
export default EverythingForPetCarousel;