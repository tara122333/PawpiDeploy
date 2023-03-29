import React from 'react'
import logoFooter from "../../Images/logoFooter.png";
import {BiCopyright} from 'react-icons/bi';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <>
    <div className="flex flex-col h-full w-full px-32 font-paw bg-yellow-400">
        <div className="flex my-3 justify-between">
            <div className="w-1/4">
                <div className="text-2xl my-3">
                    Information
                </div>
                <div className="text-lg flex flex-col">
                    <Link to="/contactus" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Contact us</Link>
                    <Link to="/accounts" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Accounts</Link>
                    <Link to="/helpandsupport" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Help & Support</Link>
                    <Link to="/partnerwithus" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Partner with us</Link>
                    <Link to="/ridewithus" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Ride with us</Link>
                </div>
            </div>

            <div className="w-1/3">
                <div className="text-2xl my-3">
                    Company
                </div>
                <div className="text-lg flex flex-col">
                    <Link to="/aboutus" className="cursor-pointer hover:text-[#5e17eb] hover:underline">About us</Link>
                    <Link to="/team" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Team</Link>
                    <div className="w-4/5 pt-4 justify-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae?
                    </div>
                </div>
            </div>

            <div  className="w-1/4">
                <div className="text-2xl my-3">
                    Legal
                </div>
                <div className="text-lg flex flex-col">
                    <Link to="/termsandconditions" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Terms & Conditions</Link>
                    <Link to="/refundandcancellation" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Refund & Cancellation</Link>
                    <Link to="/privacypolicy" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Privacy Policy</Link>
                    <Link to="/cookiepolicy" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Cookie Policy</Link>
                    <Link to="/offerterms" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Offer Terms</Link>
                    <Link to="/phisingandfraud" className="cursor-pointer hover:text-[#5e17eb] hover:underline">Phising & Fraud</Link>

                </div>
            </div>
        </div>

        <div className="flex justify-between border-stone-500 border-t-2">
            <Link to="/" className="-mt-7 -ml-7 cursor-pointer w-1/4">
                <div className="h-40 w-44">
                    <img src={logoFooter} 
                    alt="footer-logo"
                    className="h-full w-full"
                    />
                </div>
            </Link>

            <div className="flex gap-1 -mt-7 pl-3 w-1/3 items-center">
                <BiCopyright/>
                2023 Pawpi
            </div>

            <div className="flex items-center w-1/4 -mt-7 gap-5">
                <a href="https://www.google.com/" target=" _blank">
                    <FaFacebookF className="cursor-pointer hover:scale-150"/>
                </a>

                <a href="https://www.instagram.com/gopawpi" target=" _blank">
                    <FaInstagram className="cursor-pointer hover:scale-150"/>
                </a>

                <a href="https://twitter.com/iShubhamsharma0" target=" _blank">
                    <FaTwitter className="cursor-pointer ml-1 hover:scale-150"/>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
export default footer;