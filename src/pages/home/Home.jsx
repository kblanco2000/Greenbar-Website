import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
/*import { Navbar } from 'react-daisyui'
import { CustomNavbar } from '../custom-nav/CustomNavbar'
*/
import image from "../../assets/house.png";

export const Home = () => {
  return (
      <div>
        <div className="relative">
          <div className="bg-black opacity-90 brightness-50 bg-no-repeat bg-cover h-screen w-screen z-0" style={{ backgroundImage: `url(${image})` }}></div>
          
          {/* <h1 style={{ image: `url(${logo})` }}></h1> */}
          {/* <img class=" absolute w-80 rounded-lg shadow-xl" src="/images/gb-logo-white-1.svg" alt="logo" /> */}
          <h1 className="absolute text-white text-3xl text-bold font-raleway md:text-4xl md:block md:left-[40%] md:top-[25%] sm:left-[30%] sm:top-[25%]">Greenbar & Artisans</h1>
        </div>
      </div>
      
    // <div class="min-h-screen flex flex-col justify-center items-center">
    //   <div class="mx-auto p-6">
    //     <div class="flex justify-center space-x-16">
    //       <img class="w-80 rounded-lg shadow-xl" src="/assets/house.png" alt="background" />
    //       <img class="w-80 rounded-lg shadow-xl" src="/assets/gb-logo-white-1.svg" alt="logo" />
    //     </div>

    //     <div class="mt-16 flex justify-center space-x-10">
    //       <div class="relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden">
    //         <img class="absolute inset-0 w-full h-full object-cover" src="/assets/house.png" alt="background"/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    /*
    <Fragment>
    <CustomNavbar />
    <div>Hello, World!</div>
    </Fragment>*/
  )
}
