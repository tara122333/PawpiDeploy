import React, { useState } from 'react';

// import icons

import {TbChevronDown} from "react-icons/tb";
import {RxCross2} from "react-icons/rx";
import { Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';

// Import modules
import NavSmLOGO from '../../Images/NavSmLOGO.png';
import LOGO from "../../Images/Png-01.png";
import NavbarCategories from './NavbarCategories';
import SEARCH from "../../Images/loupe.png";
import CART from "../../Images/shopping-cart.png";
//import Signup from '../Login and Signup/Signup';
import LoginPopup from '../Login and Signup/LoginPopup';
import NavLinks from './NavLinks';
import LocationPopUpModel from './LocationPopUp';



//for small devices/mobile
const NavSm=({login})=>{
const [isOpenMenu, setIsOpenMenu] = useState(false);
// const [openLocation, setOpenLocation] = useState(false);
// const openLocationmodal = () => setOpenLocation(true);
  return(
    <>
    {/* <LocationPopUpModel isOpen={openLocation} setIsOpen={setOpenLocation} /> */}
      <div className="flex fixed bg-white z-50 shadow-xl items-center gap-1 h-16 w-full px-2">
        <div className="flex items-center w-1/6 justify-center">
          <Link to="/">
            <img src={NavSmLOGO}
            alt="LOGO"
            className="h-full w-full scale-100"/>
          </Link>
        </div>
        
        <div className="flex items-center w-2/5 h-8 px-1  justify-between bg-navback rounded-md border border-bordergray">
              <input type="search"
              className="h-full w-full text-xs text-black font-paw outline-none bg-navback placeholder-black"
              placeholder="For FURR BABIES....."
              />
              <div className="h-4 w-4 mb-1">
                <img src = {SEARCH}
                alt="searchIcon"
                className="w-full h-full"
                />
              </div>
        </div>

        <div className="h-2/3 w-1/3 ml-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-1/2 h-2/3 bg-pawpi-purple font-paw text-white text-xl rounded-md ">
              <h1 onClick={login}>
                <CgProfile/>
              </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 h-2/3">
            <img src={CART}
            alt="cart"
            className="w-full h-full"
            />
          </div>
        
          <div className='w-8' onClick={()=>setIsOpenMenu(!isOpenMenu)} >
                    {
                    isOpenMenu ? <RxCross2 className='text-2xl font-bold'/> :
                    <BiMenu className='text-2xl font-bold' />
                    }
          </div>
          <ul className={`md:hidden shadow-2xl bottom-0 top-16 pb-2 rounded-l-xl 
          ${isOpenMenu
            ? 'fixed top-0 right-0 w-[70%] h-max duration-300 bg-purple-50 z-10 ' : 'fixed top-0 right-[-100%] w-[70%] h-max bg-purple-50 z-10 duration-300' }`}>
                <NavLinks />
            </ul>
        </div>
      </div>
    </>
  );
};

// for medium devices/tablets
const NavMd=({login})=>{
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // const [openLocation, setOpenLocation] = useState(false);
  // const openLocationmodal = () => setOpenLocation(true);
  return(
  <>
      <div className="flex fixed bg-white shadow-lg z-50 items-center gap-1 h-24 w-full px-2">
        <div className="flex relative items-center w-1/6 pr-4 justify-center">
          <Link to="/">
            <img src={LOGO}
            alt="LOGO"
            className="h-full w-full scale-150"/>
          </Link>
        </div>
        
        <div className="flex items-center w-1/2 h-1/2 px-2 gap-1 justify-between bg-navback rounded-md border border-bordergray">
              <input type="search"
              className="h-full w-full text-md text-black font-paw outline-none bg-navback placeholder-black"
              placeholder="Search anything for your FURR BABIES....."
              />
              <div className="h-8 w-8">
                <img src = {SEARCH}
                alt="searchIcon"
                className="w-full h-full"
                />
              </div>
        </div>

        <div className="h-2/3 w-1/3 ml-4 flex items-center gap-5">
          <div className="flex items-center justify-center w-1/3 h-2/3 bg-[#5e17eb] font-paw text-white text-3xl   rounded-md">
            <h1 onClick={login}>
                <CgProfile/>
              </h1>
          </div>

          <div className="flex items-center justify-center w-16 h-12">
            <img src={CART}
            alt="cart"
            className="w-full h-full"
            />
          </div>

          <div className='text-3xl w-14' onClick={()=>setIsOpenMenu(!isOpenMenu)} >
                    {
                    isOpenMenu ? <RxCross2 className='text-4xl font-bold'/> :
                    <BiMenu className='text-5xl' />
                    }
          </div>

          <ul className={`lg:hidden w-[50%] rounded-l-xl h-max bottom-0 top-24 z-10 py-5 bg-purple-50 shadow-2xl
            ${isOpenMenu
            ? 'fixed top-0 right-0 duration-300' : 'fixed top-0 right-[-100%] duration-700' }`}>
                <NavLinks />
          </ul>
        </div>
      </div>
    </>
  );
};

// for large devices
const NavLg =({location, login})=>{
  
  return(
    <>

      <div className="w-full flex fixed flex-col z-50 shadow-lg bg-white items-center h-24 pt-1">
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
            <div className="flex items-center justify-center h-full">
              <div className='flex gap-1 justify-center cursor-pointer outline-none hover:text-pawpi-purple items-center px-2' onClick={location}>
                <span className="font-paw">
                  Jaipur
                </span>
                <TbChevronDown className='text-center'/>
              </div>
            </div>

            <div className="flex items-center justify-center w-1/4 h-full bg-[#5e17eb] font-paw text-white text-3xl rounded-xl cursor-pointer hover:scale-110 hover:duration-500">
              <h1 onClick={login}>
                <CgProfile/>
              </h1>
            </div>

            <div className="flex items-center justify-center w-11 h-10 cursor-pointer">
              <img src={CART}
              alt="cart"
              className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className='py-2 w-3/5 flex'>
          <NavbarCategories/>
        </div>

      </div>
    </>
  );
};

const Navbar = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const openLocationmodal = () => setOpenLocation(true);

  const [openLogin, setIsLogin] = useState(false);

  const openLoginPopUp = () => setIsLogin(true);

  return (
    <>
      <LoginPopup isOpen={openLogin} setIsOpen={setIsLogin} />
      <nav>
        
        <div className="md:hidden z-10 mb-16 overflow-hidden">
          <NavSm login={openLoginPopUp}/>
        </div>

         
        <div className="hidden md:flex lg:hidden mb-24 z-10 overflow-hidden ">
          <NavMd login={openLoginPopUp}/>
        </div>

      
        <div className="hidden lg:flex z-50 mb-24 overflow-hidden">
          <LocationPopUpModel isOpen={openLocation} setIsOpen={setOpenLocation} />

          <NavLg location={openLocationmodal} login={openLoginPopUp}/>
        </div>

      </nav>
    </>
  )
}

export default Navbar;