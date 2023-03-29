import React from 'react'
import NUTRO from "../../Images/nutro.png";
import ROYALCANIN from "../../Images/royalcanin.png";
import ACANA from "../../Images/acana.png";
import KONG from "../../Images/kong.png";
import NULO from "../../Images/nulo.png";
import AJ from "../../Images/aj.png";
import HILLS from "../../Images/hills.png";
import TRIXIE from "../../Images/trixie.png";

const Brands = () => {
  return (
    <>
    <div className="flex flex-col mx-28 h-72 gap-4">
        <div className="flex h-1/2 items-center justify-around">
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={NUTRO} 
                alt="BrandImage"
                className="h-28 w-36"
                />
            </div>
            
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={ROYALCANIN}
                alt="BrandImage"
                className="h-28 w-36"
                />
            </div>

            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={ACANA}
                alt="BrandImage"
                className="h-28 w-36 scale-75 scale-x-90"
                />
            </div>
            
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={KONG}
                alt="BrandImage"
                className="h-28 w-36 scale-50 scale-x-90"
                />
            </div>
        </div>

        <div className="flex h-1/2 items-center justify-around">
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={NULO} 
                alt="BrandImage"
                className="h-28 w-36"
                />
            </div>
            
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={AJ}
                alt="BrandImage"
                className="h-28 w-36"
                />
            </div>

            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={HILLS}
                alt="BrandImage"
                className="h-28 w-36 scale-75"
                />
            </div>
            
            <div className="w-1/7 bg-[#F1F1F1] hover:bg-white hover:cursor-pointer flex flex-col items-center rounded-3xl">
                <img src={TRIXIE}
                alt="BrandImage"
                className="h-28 w-36 "
                />
            </div>
        </div>
    </div>
    </>
  );
};

export default Brands;