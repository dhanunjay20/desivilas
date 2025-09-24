import React, { useRef, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared layout
import Header from './components/Header';
import Footer from './components/Footer';

// Helpers
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import OrderOnline from './pages/OrderOnline';
import Contact from './pages/ContactUs';

// New: floating WhatsApp button
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App = () => {
  // Header height -> pad main so content doesn't hide behind fixed header
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const measure = () => setHeaderHeight(headerRef.current.offsetHeight);
    measure();

    // Observe size changes (e.g., responsive logo height)
    const ro = new ResizeObserver(measure);
    ro.observe(headerRef.current);

    return () => ro.disconnect();
  }, []);

  return (
    <Router>
      {/* Smooth scroll to top on each route change */}
      <ScrollToTop behavior="smooth" />

      <div className="flex flex-col min-h-screen">
        <Header ref={headerRef} />

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

        {/* Floating UI */}
        <BackToTop threshold={400} />
        <FloatingWhatsAppButton />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
