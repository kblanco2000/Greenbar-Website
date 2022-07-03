import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black'>
        <h1 className='w-full text-3xl font-bold text-greenbarMain1'>Greenbar & Artisans</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to='/'>Home</Link></li>
            <li className='p-4'><Link to='/'>About</Link></li>
            <li className='p-4'><Link to='/'>Contact</Link></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-greenbarMain1 m-4'>Greenbar & Artisans</h1>

            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-black'>Home</li>
                <li className='p-4 border-b border-black'>About</li>
                <li className='p-4 border-b border-black'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar