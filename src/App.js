import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/Portfolio';
import Enquiry from './pages/enquiry';
import Contact from './pages/contact';
import Staticweb from './pages/staticweb';
import DynamicWebDevelopmentPage from './pages/dynamic-web-desgin'; 
import Ecommerce from './pages/ecommerce';
import WebAppDevelopment from './pages/web-app-development';
import AndroidAppDevelopment from './pages/android-app-development';
import HybridAppDevelopment from './pages/hybrid-app-development';
import DigitalMarketing from './pages/digital-marketing';
import Branding from './pages/branding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staticweb" element={<Staticweb />} />
        <Route path="/dynamic-web-desgin" element={<DynamicWebDevelopmentPage />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="/hybrid-app-development" element={<HybridAppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </Router>
  );
}

export default App;
