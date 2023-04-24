import React from 'react'
import Brands from '../Brands/Brands';
import Banner2 from '../../Images/Banner2.png';
import BrandBG from '../../Images/brandbackground.jpg';
import PetProfileBanner from '../../Images/petprofilebanner.png';
import {Link} from 'react-router-dom';
import ReviewCarousel from '../../Components/ReviewCarousel/ReviewCarousel';
import DogBedbanner from '../../Images/dogbedbanner.png';
import BlueBanner from '../../Images/vet.png';
import HeroCarousal from '../HeroCarousal/HeroCarousal';
import MainCategory from '../MainCategory/MainCategory';
import CategoryDesign from '../CategoryDesign/CategoryDesign';
import BestSellingCarousel from '../BestSellingProducts/BestSellingCarousel';
import EverythingForPetCarousel from '../EverythingForPetCarousel/EverythingForPetCarousel';
import SpecialSubCategory from '../SpecialSubCategory/SpecialSubCategory';

const Home = () => {
  return (
  <>
  <div className="w-full h-full">
    
    {/*HERO-CAROUSEL */}
    <div className='lg:mb-24 w-full mb-12 lg:-z-10 outline-none'>  
      <HeroCarousal/>
    </div>

    {/*POPULAR-CATEGORIES*/}
    <div className="flex mb-6 items-center flex-col w-full h-full">
        <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
            Popular Categories
        </div>
        <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
            Everything that your pet needs
        </div>
        <div className="grid grid-cols-3 lg:flex mt-6 lg:gap-4 md:gap-8 mx-4">
            {MainCategory.map((data)=>(
                <CategoryDesign {...data} />
            ))}
        </div>
    </div>

    {/*BANNER-2*/}
    <div className="lg:h-full lg:scale-y-90 w-full lg:cursor-pointer md:h-80 h-52 lg:scale-100 mt-12">
      <img src={Banner2}
        alt="Banner2"
        className="h-full w-full"
      />
    </div>

    {/*BEST-SELLING-PRODUCTS*/}
    <div className="lg:w-full lg:h-full lg:my-3 my-6">
      <div className="flex flex-col items-center">
        <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
            Best Selling Products
        </div>
        <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
              Loved by pets and pet parents!
        </div>
      </div>
      <div className="lg:mx-32 md:mx-12 mx-6 mt-10">
      <BestSellingCarousel/>
      </div> 
    </div>

    {/*EVERYTHING-YOUR-PET-NEEDS-BANNER&CAROUSEL*/}
    <div className="lg:h-full w-full h-52 md:h-full md:my-14 my-8 bg-cover bg-bottom" 
    style={{backgroundImage: `url(${BlueBanner})`}}>
      <div className="lg:pt-80 lg:pb-12 lg:mx-20 md:pt-44 pt-28 md:mx-12 mx-12">
        <EverythingForPetCarousel/>
      </div>
    </div>

    {/*SPECIAL-SUBCATEGORY*/}
    <div className="flex mb-6 items-center flex-col w-full h-full">
        <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
            Your pet needs special care!
        </div>
        <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
            A little love, and some right products.
        </div>
        <div className="grid grid-cols-3 lg:flex mt-6 lg:gap-4 md:gap-8 mx-4">
            {SpecialSubCategory.map((data)=>(
                <CategoryDesign {...data} />
            ))}
        </div>
    </div>

    {/*DOG-BED-BANNER*/}
    <div className="lg:h-full w-full lg:cursor-pointer md:h-80 h-52 lg:scale-100 mt-12">
      <img src={DogBedbanner}
        alt="DogBedBanner"
        className="h-full w-full"
      />
    </div>

    {/*REVIEW-SLIDER*/}
    <div className="w-full h-full lg:mt-20 md:mt-14 mt-10">
      <div className="flex flex-col items-center">
        <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
            The PawPi Family
        </div>
        <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
            Reviews that spread smiles
        </div>
      </div>
      <div className="lg:mx-10 md:mx-6">
        <ReviewCarousel/>
      </div>
    </div>

    {/*PET-PROFILE-BANNER*/}
    <Link to="petprofile" className="h-full w-full cursor-pointer">
      <img src={PetProfileBanner}
      alt="PetProfileBanner"
      className="md:h-96 lg:h-full h-72"
      />
    </Link>

    {/*BRANDS*/}
    <div className="lg:pt-12 h-full w-full bg-center bg-cover bg-fixed md:pt-8 pt-4" 
    style={{backgroundImage: `url(${BrandBG})`}}>
      <div className="flex flex-col items-center md:pb-0 pb-1">
        <h1 className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">Featured Brands</h1>
        <h1 className="lg:text-3xl text-xl md:text-2xl lg:mb-1 font-caveatB text-[#5e17eb]">Try them once, love them for life!</h1>
      </div>
      <Brands/>
    </div>

  </div>
  </>
  )
}

export default Home;