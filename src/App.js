import { Divider } from 'react-daisyui';
import './App.css';
import Navbar from './components/Navbar';
/*import Home from './pages/home/Home';*/

import { Routes, Route } from 'react-router-dom'
import { About } from './pages/about/About';
// import { PageNotFound } from './pages/page-not-found/PageNotFound'
import { Home } from './pages/home/Home'
import { Contact } from './pages/contact/Contact'
import { OurWork } from './pages/our-work/OurWork'


import image from "./assets/house.png";
// import image2 from "./assets/Greenbar&ArtisansLogo#2-01.svg";


function App() {
  return (
    <>
    <div>
        <Navbar/>
        <main> 
          <section> 
            <Routes> 
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />              
              <Route path='/our-work' element={<OurWork/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </section>
        </main>
        <div className="relative">
          <div className="bg-black opacity-90 brightness-50 bg-no-repeat bg-cover h-screen w-screen z-10" style={{ backgroundImage: `url(${image})` }}></div>
          
          <h1 className=" absolute text-white text-3xl text-bold font-raleway md:text-4xl md:block md:left-[40%] md:top-[25%] sm:left-[30%] sm:top-[25%]" >Construction LLC</h1>
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
