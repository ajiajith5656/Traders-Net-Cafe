import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Members from './pages/Members';
import Register from './pages/Register';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    setIsRouteLoading(true);
    const timerId = setTimeout(() => {
      setIsRouteLoading(false);
    }, 350);

    return () => clearTimeout(timerId);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/members" element={<Members />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />

      {isRouteLoading && (
        <div className="route-loader" role="status" aria-live="polite" aria-label="Page loading">
          <div className="route-loader__spinner"></div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
