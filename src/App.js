import './App.css';

import { Routes, Route } from 'react-router-dom'
import { About } from './pages/about/About';
import { PageNotFound } from './pages/page-not-found/PageNotFound'
import { Home } from './pages/home/Home'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />        
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App;
