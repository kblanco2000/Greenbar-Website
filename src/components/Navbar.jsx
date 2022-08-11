import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='bg-white flex justify-between items-center h-20  mx-auto px-4  text-black'>
        <h1 className='w-full text-3xl font-raleway font-bold text-black'>Greenbar & Artisans</h1>
        <ul className='hidden md:flex text-xl right-20'>
            <li className='p-4 whitespace-nowrap font-raleway'><Link to='/'>Home</Link></li>
            <li className='p-4 whitespace-nowrap font-raleway'><Link to='/About'>About</Link></li>
            <li className='p-4 whitespace-nowrap font-raleway'><Link to='/OurWork'>Our Work</Link></li>
            <li className='p-4 whitespace-nowrap font-raleway'><Link to='/Contact'>Contact</Link></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={!nav ? 'md:hidden z-10 fixed left-0 top-0 w-[] h-[] border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-black m-4 font-raleway'>Greenbar & Artisans</h1>

            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-black font-raleway'>Home</li>
                <li className='p-4 border-b border-black font-raleway'>About Us</li>
                <li className='p-4 border-b border-black font-raleway'>Our Work</li>
                <li className='p-4 font-raleway'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar