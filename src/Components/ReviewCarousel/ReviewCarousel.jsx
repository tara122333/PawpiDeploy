import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReviewNextArrow, ReviewPrevArrow } from "../HeroCarousal/ArrowCarousel";


const ReviewCarousel = () => {
    const settingsLg = {
      arrows: true,
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
      nextArrow: <ReviewNextArrow/>,
      prevArrow: <ReviewPrevArrow/>,
    };
    const settingsMd = {
        arrows: false,
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay : true,
        pauseOnHover: true,
        nextArrow: <ReviewNextArrow/>,
        prevArrow: <ReviewPrevArrow/>,
    };
    const settingsSm = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        pauseOnHover: true,
        nextArrow: <ReviewNextArrow/>,
        prevArrow: <ReviewPrevArrow/>,
    };

    const ReviewCardDetails=[

        {
            profilephoto:"https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg",
            name: "HeroNo.1",
            reviewtext: "I found Pawpi very useful for my pet Tiger. Everything is available here. Its one stop destination for my Tiger PILLU",
        },

        {
            profilephoto:"https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg",
            name: "Bunty Biden",
            reviewtext: "gchc  jfy c ytd t   ftfj    uy     yfvhgcf ccgvc vs . This is my Cat's review. He loved it",
        },

        {
            profilephoto:"https://images.freeimages.com/images/previews/7b4/grey-catbird-in-profile-1641861.jpg",
            name: "Chidiya Rani",
            reviewtext: "Kutta billi toh thik hai. mere khane ki bhi vyavastha karo bhailogon",
        },

        {
            profilephoto:"https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg",
            name: "HeroNo.1",
            reviewtext: "I found Pawpi very useful for my pet Tiger. Everything is available here. Its one stop destination for my Tiger PILLU",
        },
    ];

    return (
    <>
    <div className="hidden lg:contents">
        <Slider {...settingsLg}>
        {
        ReviewCardDetails.map((data)=>(
            <div className="items-center px-16 py-10">
                <div className="flex h-80 w-full flex-col py-6 items-center shadow-[6px_6px_10px_2px] shadow-slate-600 rounded-xl">
                    <div className="h-24 w-24 items-center mb-4 rounded-full">
                        <img src={data.profilephoto}
                        alt="profileimage"
                        className="h-full w-full rounded-full"
                        />
                    </div>

                    <div className="font-paw px-4 text-xl mb-2 font-semibold">
                        <h1>{data.name}</h1>
                    </div>

                    <div className="text-lg px-4 font-paw text-gray-400 ">
                        <h1>{data.reviewtext}</h1>
                    </div>
                </div>
            </div>
        ))
        }
        </Slider>
    </div>

    <div className="hidden md:contents lg:hidden">
        <Slider {...settingsMd}>
        {
        ReviewCardDetails.map((data)=>(
            <div className="items-center px-10 py-6">
                <div className="flex h-72 w-full flex-col pt-4 items-center shadow-[6px_6px_10px_2px] shadow-slate-600 rounded-xl">
                    <div className="h-20 w-20 items-center mb-2 rounded-full">
                        <img src={data.profilephoto}
                        alt="profileimage"
                        className="h-full w-full rounded-full"
                        />
                    </div>

                    <div className="font-paw px-4 text-lg mb-4 font-semibold">
                        <h1>{data.name}</h1>
                    </div>

                    <div className="text-md px-4 font-paw text-gray-500 ">
                        <h1>{data.reviewtext}</h1>
                    </div>
                </div>
            </div>
        ))
        }
        </Slider>
    </div>

    <div className="md:hidden">
        <Slider {...settingsSm}>
        {
        ReviewCardDetails.map((data)=>(
            <div className="items-center px-14 py-8">
                <div className="flex h-60 w-full flex-col py-4 items-center shadow-[6px_6px_10px_2px] shadow-slate-600 rounded-xl">
                    <div className="h-20 w-20 items-center mb-2 rounded-full">
                        <img src={data.profilephoto}
                        alt="profileimage"
                        className="h-full w-full rounded-full"
                        />
                    </div>

                    <div className="font-paw text-lg mb-2 font-semibold">
                        <h1>{data.name}</h1>
                    </div>

                    <div className="text-md px-4 font-paw text-gray-500 ">
                        <h1>{data.reviewtext}</h1>
                    </div>
                </div>
            </div>
        ))
        }
        </Slider>
    </div>
    </>
  );
};
export default ReviewCarousel;