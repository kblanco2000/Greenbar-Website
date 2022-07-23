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
        <div className="brightness-50 bg-no-repeat bg-cover h-screen w-screen z-10" 
        style={{ backgroundImage: `url(${image})` }}>          
        </div>
        <h1 className="hidden absolute text-white text-3xl text-bold font-raleway z-0 top-4 left-10 md:text-4xl md:top-8 md:block">Construction LLC 1</h1>
        <h1 className="absolute text-white text-3xl text-bold font-raleway z-0 top-4 left-10 md:text-4xl md:top-8 md:hidden">Construction LLC 2</h1>
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
