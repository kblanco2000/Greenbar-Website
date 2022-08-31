import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from 'react-daisyui';
/*import { Navbar } from 'react-daisyui'
import { CustomNavbar } from '../custom-nav/CustomNavbar'
*/
import image from "../../assets/house.png";

export const Home = () => {
  return (
      <div className='h-full'>
        <div className="relative">
          <div className="absolute opacity-50 bg-no-repeat bg-cover h-screen w-screen z-0" style={{ backgroundImage: `url(${image})` }}></div>   
          <div class="inline-flex w-full justify-center">
              <img class="absolute rounded-lg shadow-xl grid w-96 top-[40%] z-50" src="/images/gb-logo-white-1.svg" alt="logo" />
          </div> 
        </div>
      </div>
  )
}
