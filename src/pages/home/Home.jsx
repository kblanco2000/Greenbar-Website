import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
/*import { Navbar } from 'react-daisyui'
import { CustomNavbar } from '../custom-nav/CustomNavbar'
*/
import image from "../../assets/house.png";
import logo from "../../assets/gb-logo-white-1.svg";
export const Home = () => {
  return (
      <div>
        <div className="relative">
          <div className="bg-black opacity-90 brightness-50 bg-no-repeat bg-cover h-screen w-screen z-10" style={{ backgroundImage: `url(${image})` }}></div>
          
          {/* <h1 style={{ image: `url(${logo})` }}></h1> */}
          <h1 className="absolute text-white text-3xl text-bold font-raleway md:text-4xl md:block md:left-[40%] md:top-[25%] sm:left-[30%] sm:top-[25%]">Greenbar & Artisans</h1>
        </div>
      <div className="bg-white text-black text-center">Copyright © Greenbar & Artisans LLC 2022</div>
      </div>
    
    
    /*
    <Fragment>
    <CustomNavbar />
    <div>Hello, World!</div>
    </Fragment>*/
  )
}
