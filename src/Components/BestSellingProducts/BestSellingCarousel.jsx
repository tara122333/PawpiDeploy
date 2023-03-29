import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product1 from '../../Images/BestSellingProducts/Product1.png';
import Product2 from '../../Images/BestSellingProducts/Product2.png';
import Product3 from '../../Images/BestSellingProducts/Product3.png';
import Product4 from '../../Images/BestSellingProducts/Product4.png';
import Product5 from '../../Images/BestSellingProducts/Product5.png';
import {AiFillStar} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi';

const BestSellingCarousel = () => {
 
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

    const BestSellingCardDetails=[

        {
           name: "Product 1",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product1,
        },

        {
           name: "Product 2",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product2,
        },

        {
           name: "Product 3",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product3,
        },

        {
           name: "Product 4",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product4,
        },

        {
            name: "Product 5",
            description: "Lorem ipsum dolor sit",
            reviews: "5,789",
            price: "1,244.00",
            image: Product5,
        },

        {
            name: "Product 6",
            description: "Lorem ipsum dolor sit",
            reviews: "5,789",
            price: "1,244.00",
            image: Product3,
        },
    ];

    return (
    <Slider {...settings}>
    {
      BestSellingCardDetails.map((data)=>(
        <div className="h-full flex flex-col w-full px-12">
            <div className="h-36 rounded-3xl w-full flex items-center">
                <div className="h-full w-full flex items-center justify-center rounded-3xl bg-[#FAF9F9]">
                    <img src={data.image} 
                    alt="BestSellingProducts"
                    className="h-32 w-46"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col mt-6">
                    <h1 className="text-xl font-paw font-semibold">{data.name}</h1>
                    <h1 className="text-gray-500 font-paw text-lg font-semibold">{data.description}</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex">
                        <AiFillStar className="text-yellow-300 text-xl"/>
                        <AiFillStar className="text-yellow-300 text-xl"/>
                        <AiFillStar className="text-yellow-300 text-xl"/>
                        <AiFillStar className="text-yellow-300 text-xl"/>
                        <AiFillStar className="text-yellow-300 text-xl"/>
                    </div>
                    <h1 className="text-gray-500 font-paw text- font-semibold">{data.reviews}</h1>
                </div>
                <div className="flex items-center">
                    <BiRupee className="text-xl"/>
                    <h1 className="text-xl font-caveatB">{data.price}</h1>
                </div>
            </div>
        </div>
      ))
    }
    </Slider>
  );
};
export default BestSellingCarousel;