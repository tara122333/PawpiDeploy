import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import HangingCatDoodle from '../../Images/Doodles/hangingcatdoodle.png';
import AnimalsDoodle from '../../Images/Doodles/animalsdoodle.png';
import {FcGoogle} from 'react-icons/fc';
// 
import { Link } from 'react-router-dom';
//import LoginPopupBackground from '../../Images/LoginPopupEssentials/LoginPopupBackground.png';

export default function LoginPopup({isOpen ,setIsOpen}) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl my-4 flex justify-center font-paw font-semibold text-gray-900"
                  >
                    Hello!
                  </Dialog.Title>

                  <div className=" w-full flex flex-col gap-3">

                    <div className='flex flex-col'>
                      
                        <input type="email" placeholder='Pawpi@gmail.com' id="Email" name="email"
                          className="w-full h-10 rounded-md  bg-white text-md text-gray-700 shadow-md border font-paw outline-none px-5" />
                      

                        <input type="password" id="Password" name="password" placeholder='Password'
                          className="mt-4 w-full h-10 rounded-md bg-white text-md text-gray-700 shadow-md border font-paw outline-none px-5" />
    
                    </div>

                    <div className="w-full flex justify-center relative">
                      <img src={HangingCatDoodle}
                      alt="HangingCatDoodle"
                      className="w-20 h-40 cursor-pointer object-cover absolute hover:-scale-x-100"
                      />
                      <h1 type="button w-full"
                        className="flex w-full mt-[54px] z-0 justify-center rounded-3xl bg-yellow-300 py-3 text-2xl font-bold font-paw text-black lg:hover:bg-blue-200  cursor-pointer focus:outline-none">
                        LOGIN
                      </h1>
                    </div>
                      
                    <div className="mt-2 flex justify-between text-sm text-gray-500" >
                        <Link className="w-1/8 flex items-center font-paw justify-self-start hover:text-[#5E17EB] cursor-pointer">
                        Go to Signup
                        </Link>
                        <Link className="w-1/8 flex items-center font-paw  hover:text-[#5E17EB] cursor-pointer">
                        Forgot Password?
                        </Link>
                    </div>

                    <div className="font-paw flex items-baseline md:mt-4 justify-between mt-2">
                      
                      <div className="h-fill w-fill border-b-2 border-gray-400">
                        <img src={AnimalsDoodle}
                        alt="AnimalsDoodle"
                        className="md:h-16 h-12 md:-mb-4 -mb-3"
                        />
                      </div>

                      <h1>Login using:</h1>

                      <div className="h-fill w-fill border-b-2 border-gray-400">
                        <img src={AnimalsDoodle}
                        alt="AnimalsDoodle"
                        className="md:h-16 h-12 md:-mb-4 -mb-3 -scale-x-100"
                        />
                      </div>
                    </div>
                    <div className='flex h-full w-full items-center justify-center'>
                      <div className="h-16 w-16 border-2 lg:cursor-pointer lg:hover:scale-125 lg:hover:duration-500 rounded-full md:mt-0 mt-3">
                        <FcGoogle className="h-full w-full"/>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
