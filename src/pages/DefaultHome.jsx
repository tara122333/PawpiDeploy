import React from 'react'
import { useParams } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Cat from '../Components/Cat/Cat';
import Dog from '../Components/Dog/Dog';
import Brands from '../Components/ShopByBrands/Brands';
import Breed from '../Components/ShopByBreed/Breed';
import Lifestage from '../Components/ShopByLifestage/lifestage'
import Food from '../Components/Food/Food';
import Toys from '../Components/Toys/Toys';
import Clothes from '../Components/Clothes/Clothes';
import Accessories from '../Components/Accessories/Accessories';
import KnowYourPet from '../Components/KnowYourPet/KnowYourPet';
import ContactUs from '../Components/ContactUs/ContactUs';
import Accounts from '../Components/Accounts/Accounts';
import HelpAndSupport from '../Components/HelpAndSupport/HelpAndSupport';
import PartnerWithUs from '../Components/PartnerWithUs/PartnerWithUs';
import RideWithUs from '../Components/RideWithUs/RideWithUs';
import AboutUs from '../Components/AboutUs/AboutUs';
import Team from '../Components/Team/Team';
import TermsAndConditions from '../Components/TermsAndConditions/TermsAndConditions';
import RefundAndCancellation from '../Components/RefundAndCancellation/RefundAndCancellation';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from '../Components/CookiePolicy/CookiePolicy';
import OfferTerms from '../Components/OfferTerms/OfferTerms';
import PhisingAndFraud from '../Components/PhisingAndFraud/PhisingAndFraud';


const DefaultHome = () => {
    const {type} = useParams();
  return (
    <>
        <div className='my-12'>
          {type === 'home' && <Home/> }
          {type === 'cats' && <Cat/> }
          {type === 'dogs' && <Dog/> }
          {type === 'brands' && <Brands/> }
          {type === 'shopbybreed' && <Breed/> }
          {type === 'shopbylifestage' && <Lifestage/> }
          {type === 'foods' && <Food/> }
          {type === 'toys' && <Toys/> }
          {type === 'clothes' && <Clothes/> }
          {type === 'accessories' && <Accessories/> }
          {type === 'petprofile' && <KnowYourPet/> }
          {type === 'contactus' && <ContactUs/> }
          {type === 'accounts' && <Accounts/> }
          {type === 'helpandsupport' && <HelpAndSupport/> }
          {type === 'partnerwithus' && <PartnerWithUs/> }
          {type === 'ridewithus' && <RideWithUs/> }
          {type === 'aboutus' && <AboutUs/> }
          {type === 'team' && <Team/> }
          {type === 'termsandconditions' && <TermsAndConditions/> }
          {type === 'refundandcancellation' && <RefundAndCancellation/> }
          {type === 'privacypolicy' && <PrivacyPolicy/> }
          {type === 'cookiepolicy' && <CookiePolicy/> }
          {type === 'offerterms' && <OfferTerms/> }
          {type === 'phisingandfraud' && <PhisingAndFraud/> }
        </div>
    </>
  )
}

export default DefaultHome;