import { Divider } from 'react-daisyui';
import './App.css';
import Navbar from './components/Navbar';
/*import Home from './pages/home/Home';*/

import { Routes, Route } from 'react-router-dom'
import { About } from './pages/about/About';
import { PageNotFound } from './pages/page-not-found/PageNotFound'
import { Home } from './pages/home/Home'

import image from "./assets/house.png";

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <div className="relative">
        <div className="bg-black opacity-90 brightness-50 bg-no-repeat bg-cover h-screen w-screen z-10" style={{ backgroundImage: `url(${image})` }}></div>
        <h1 className="hidden absolute text-white text-3xl text-bold font-raleway md:text-4xl md:block left-[42%] top-[25%]">Construction LLC</h1>
      </div>
      
      <div className="bg-white text-black text-center">Copyright Greenbar & Artisans LLC 2022</div>
    </div>

    
    </>
  /*
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />        
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  */
    
  
  )
}

export default App;
