import React, { useState } from 'react';
import {VscLocation} from "react-icons/vsc";
import {TbChevronDown,TbChevronUp} from "react-icons/tb";
import {RxDividerVertical} from "react-icons/rx";
import {CgSearch} from "react-icons/cg";
import {RiShoppingCartLine} from "react-icons/ri";
import {FiMenu} from "react-icons/fi";
import {MdOutlineLocationOn} from "react-icons/md";
import LOGO from "../../Images/Png-01.png";
import SEARCH from "../../Images/loupe.png";
import CART from "../../Images/shopping-cart.png";
import { Link } from 'react-router-dom';
import DogDropDown from '../NavbarDropdown/DogDropDown';
import CatDropDown from '../NavbarDropdown/CatDropDown';
import BrandDropDown from '../NavbarDropdown/BrandDropDown';
import ShopByBreedDropDown from '../NavbarDropdown/ShopByBreedDropDown';
import ShopByLifeStageDropDown from '../NavbarDropdown/ShopByLifeStageDropDown';

//for small devices/mobile
const NavSm=()=>{
  return(
    <>
      <div className="h-24 w-full shadow-lg py-1 bg-creame">
        <div className="w-full h-3/5 flex items-center justify-around px-2 ">
          <div className="w-1/5 h-full flex items-center justify-start">
            <FiMenu className="text-2xl"/>
          </div>

          <div className="w-3/5 h-full flex justify-center">
            <div className="w-36 h-24">
              <img src={LOGO}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-28 py-1 flex items-center gap-1 justify-center bg-royal-green text-white rounded-xl">
            <RiShoppingCartLine className="text-2xl"/>
            <div className="text-xl">
              <h1>Cart</h1>
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex items-center justify-between px-2 py-2">
          <div className="w-1/3 h-full flex items-center justify-start">
              <CgSearch className="text-2xl"/>
          </div>
          
          <div className="w-1/3 h-full flex items-center justify-end gap-1">
            <MdOutlineLocationOn className="text-2xl"/>
            <div className="text-xl">
              <h1>Location</h1>
            </div>
          </div>
          
        </div>

      </div>
    </>
  );
};

//for medium devices/tablets
const NavMd=()=>{
  const [isTemp , setIsTemp] = useState(false);
  return(
    <>
      <div className="flex items-center justify-between px-12 py-2 h-20 w-full bg-creame shadow-xl">
          <div className="w-1/7 h-full flex items-center justify-center">
            <div className="w-24 h-20 cursor-pointer">
            <img src={LOGO}
            alt="logo"
            className="w-full h-full"
            />
            </div>
          </div>

          <div className="flex items-center w-3/5 h-4/5 mx-4 gap-1 bg-white px-2 rounded-3xl border border-black shadow-md shadow-slate-500">
            <VscLocation className="text-4xl"/>
             
              <input type="search"
              className="w-1/5 h-full text-md text-blue-500 outline-none "
              placeholder="Location "
              onClick={ ()=> setIsTemp((prev)=> !prev) }
              />

              <div className="text-2xl flex items-center py-2 cursor-pointer">
                {
                  isTemp ? <TbChevronUp onClick={ ()=> setIsTemp((prev)=> !prev) }/> : <TbChevronDown onClick={ ()=> setIsTemp((prev)=> !prev) } />
                }
              </div>

              <RxDividerVertical className="text-4xl"/>
              <CgSearch className="text-2xl "/>
              
              <input type="search"
              className="w-2/3 h-full text-md text-blue-500 outline-none rounded-r-xl"
              placeholder="Search anything for your pet..."
              />
          </div>

          <div className="w-1/5 flex items-center h-4/5 text-xl gap-3">
            <div className="flex items-center justify-center w-full gap-2 py-2 bg-royal-green text-white hover:bg-orange-200 hover:border border-blue-700 rounded-xl hover:text-blue-700 cursor-pointer">
              <RiShoppingCartLine className="text-3xl"/>
              <h1>My Cart</h1>
            </div>
          </div>

          <div className="w-1/12 flex justify-center items-center h-4/5 text-4xl pl-4 cursor-pointer">
            <FiMenu/>
          </div>
      </div>
    </>
  );
};

//for large devices
const NavLg=()=>{
  return(
    <>
      <div className="w-full flex flex-col items-center h-24 bg-white pt-1 ">
        <div className="flex items-center justify-between px-12 py-2 h-3/5 w-full">
          <div className="w-1/5 h-24 flex mt-6 items-center pt-4">
            <Link to="/" className="cursor-pointer scale-75 w-full">
              <img src={LOGO}
              alt="logo"
              className="w-full h-full"
              />
            </Link>
          </div>

          <div className="flex items-center w-1/2 h-full px-4 mx-2 gap-2 justify-between bg-navback rounded-lg border  border-bordergray">
              <input type="search"
              className="h-full w-full text-md text-black font-paw outline-none bg-navback placeholder-black"
              placeholder="Search anything for your FURR BABIES....."
              />
              <div className="h-7 w-7">
                <img src = {SEARCH}
                alt="searchIcon"
                className="w-full h-full"
                />
              </div>
          </div>

          <div className="flex items-center justify-around h-full w-1/4 text-xl">
            <div className="flex items-center justify-center h-full w-1/4 cursor-pointer hover:text-slate-600">
              <div className="font-paw text-xl w-full ">
                Jaipur
              </div>
              <TbChevronDown/>
            </div>

            <div className="flex items-center justify-center w-1/3 h-full bg-[#5e17eb] font-paw text-white rounded-xl cursor-pointer hover:text-2xl">
              Login
            </div>

            <div className="flex items-center justify-center w-11 h-10 cursor-pointer">
            <img src={CART}
            alt="cart"
            className="w-full h-full"
            />
            </div>
          </div>
        </div>
        
        <div className="flex items-center w-3/5 justify-center gap-14 h-1/3 text-lg">
          <Link to="/dogs" className="w-1/8 flex items-center font-paw justify-center hover:text-[#5E17EB] cursor-pointer">
            <h1>Dogs</h1>
            {/* <DogDropDown /> */}
            <TbChevronDown className="text-xl"/>
          </Link>

          <Link to="/cats" className="w-1/8 flex items-center font-paw justify-center hover:text-[#5E17EB] cursor-pointer">
            <h1>Cats</h1>
            {/* <CatDropDown/> */}
            <TbChevronDown className="text-xl"/>
          </Link>

          <Link to="/brands" className="w-1/8 flex items-center font-paw justify-center hover:text-[#5E17EB] cursor-pointer">
            <h1>Brands</h1>
            {/* <BrandDropDown/> */}
            <TbChevronDown className="text-xl"/>
          </Link>

          <Link to="/shopbybreed" className="w-1/8 flex items-center font-paw justify-center hover:text-[#5E17EB] cursor-pointer">
            <h1>Shop By Breed</h1>
            {/* <ShopByBreedDropDown/> */}
            <TbChevronDown className="text-xl"/>
          </Link>

          <Link to="/shopbylifestage" className="w-1/8 flex items-center font-paw justify-center hover:text-[#5E17EB] cursor-pointer">
            <h1>Shop By Lifestage</h1>
            {/* <ShopByLifeStageDropDown/> */}
            <TbChevronDown className="text-xl"/>
          </Link>

        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav>
        
        <div className="md:hidden">
          <NavSm/>
        </div>

        <div className="hidden md:flex lg:hidden">
          <NavMd/>
        </div>

        <div className="hidden lg:flex">
          <NavLg/>
        </div>

      </nav>
    </>
  )
}

export default Navbar;