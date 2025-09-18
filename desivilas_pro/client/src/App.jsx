import React, { useRef, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import shared layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import OrderOnline from './pages/OrderOnline';
import Contact from './pages/ContactUs';

const App = () => {
  // 1. Create a ref to hold a reference to the Header's DOM element
  const headerRef = useRef(null);
  
  // 2. Create state to store the measured height of the header
  const [headerHeight, setHeaderHeight] = useState(0);

  // 3. Use useLayoutEffect to measure the header's height after it renders
  useLayoutEffect(() => {
    if (headerRef.current) {
      // Get the height of the header and update the state
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 4. Pass the ref to the Header component */}
        <Header ref={headerRef} />

        {/* 
          5. Apply the measured height as inline style for the top padding.
             This dynamically adjusts the padding based on the actual rendered height of the header.
        */}
        <main className="flex-grow" style={{ paddingTop: `${headerHeight}px` }}> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
