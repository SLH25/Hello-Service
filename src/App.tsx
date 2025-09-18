import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import HomePage from './components/HomePage/HomePage';
import ServicePage from './components/ServicePage/ServicePage';
import PrestatairePage from './components/PrestatairePage/PrestatairePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/Contact Page/ContactPage';


function App() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/Prestataires' element={<PrestatairePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />


      </Routes>
    
      <Footer />
    </div>
   
  )
}

export default App
