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
import FoodCategory from '../SubCategory/Dog/Food';
import ToyCategory from '../SubCategory/Dog/Toys';
import ClothCategory from '../SubCategory/Dog/Clothing';
import BiscTreatsChewsCategory from '../SubCategory/Dog/BiscTreatsAndChews';
import WalkEssentials from '../SubCategory/Dog/WalkEssentials';
import BeddingAndMatsCategory from '../SubCategory/Dog/BeddingAndMats';
import GroomingCategory from '../SubCategory/Dog/Grooming';
import BowlsAndDinerCategory from '../SubCategory/Dog/BowlsAndDiner';
import TravelCategory from '../SubCategory/Dog/Travel';
import HealthAndHygieneCategory from '../SubCategory/Dog/HealthAndHygiene';
import BestSellingCarousel from '../BestSellingProducts/BestSellingCarousel';
import EverythingForPetCarousel from '../EverythingForPetCarousel/EverythingForPetCarousel';
import SpecialSubCategory from '../SpecialSubCategory/SpecialSubCategory';

const Home = () => {
  return (
  <>
  <div className="w-full h-full">
    
    {/*HERO-CAROUSEL */}
    <div className='mb-24 w-full'>  
      <HeroCarousal/>
    </div>

    {/*POPULAR-CATEGORIES*/}
    <div className="flex mb-6 items-center flex-col w-full h-full">
        <div className="text-3xl font-semibold font-paw cursor-pointer">
            Popular Categories
        </div>
        <div className="text-3xl mb-3 font-caveatB text-[#5e17eb]">
            Everything that your pet needs
        </div>
        <div className="flex mt-6 gap-4">
            {MainCategory.map((data)=>(
                <CategoryDesign {...data} />
            ))}
        </div>
    </div>

    {/*BANNER-2*/}
    <div className="h-full scale-y-90 w-full cursor-pointer">
      <img src={Banner2}
        alt="Banner2"
        className="h-full w-full"
      />
    </div>

    {/*BEST-SELLING-PRODUCTS*/}
    <div className="w-full h-full my-3">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold font-paw cursor-pointer">
            Best Selling Products
        </div>
        <div className="text-3xl mb-3 font-caveatB text-[#5e17eb]">
              Loved by pets and pet parents!
        </div>
      </div>
      <div className="mx-32 mt-10">
      <BestSellingCarousel/>
      </div> 
    </div>

    {/*EVERYTHING-YOUR-PET-NEEDS-BANNER&CAROUSEL*/}
    <div className="h-full w-full my-14 bg-cover bg-bottom" 
    style={{backgroundImage: `url(${BlueBanner})`}}>
      <div className="pt-80 pb-12 mx-20">
        <EverythingForPetCarousel/>
      </div>
    </div>

    {/*SPECIAL-SUBCATEGORY*/}
    <div className="flex mb-6 items-center flex-col w-full h-full">
        <div className="text-3xl font-semibold font-paw cursor-pointer">
            Your pet needs special care!
        </div>
        <div className="text-3xl mb-3 font-caveatB text-[#5e17eb]">
            A little love, and some right products.
        </div>
        <div className="flex mt-6 gap-4">
            {SpecialSubCategory.map((data)=>(
                <CategoryDesign {...data} />
            ))}
        </div>
    </div>

    {/*DOG-BED-BANNER*/}
    <div className="h-full scale-y-90 w-full cursor-pointer">
    <img src={DogBedbanner}
        alt="DogBedBanner"
        className="h-full w-full"
        />
    </div>

    {/*REVIEW-SLIDER*/}
    <div className="w-full h-full my-3">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold font-paw cursor-pointer">
            The PawPi Family
        </div>
        <div className="text-3xl mb-3 font-caveatB text-[#5e17eb]">
            Reviews that spread smiles
        </div>
      </div>
      <div className="mx-12">
        <ReviewCarousel/>
      </div>
    </div>

    {/*PET-PROFILE-BANNER*/}
    <Link to="petprofile" className="h-full w-full scale-y-90 cursor-pointer">
      <img src={PetProfileBanner}
      alt="PetProfileBanner"
      />
    </Link>

    {/*BRANDS*/}
    <div className="py-12 h-full w-full bg-center bg-cover bg-fixed" 
    style={{backgroundImage: `url(${BrandBG})`}}>
      <div className="font-paw text-center text-3xl pb-8" >
        <h1 className="text-black font-semibold">Featured Brands</h1>
        <h1 className="font-caveatB text-[#5E17EB] pb-6">Try them once, love them for life!</h1>
      </div>
      <Brands/>
    </div>

  </div>
  </>
  )
}

export default Home;