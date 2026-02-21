import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundGlow from './components/layout/BackgroundGlow';

// Page Imports
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import BookCall from './pages/BookCall';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundGlow />
      <Navbar />

      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/results" element={
            <div className="container" style={{ padding: '20vh 0', textAlign: 'center' }}>
              <h1>Results Dashboard</h1>
              <p className="subheadline" style={{ margin: '0 auto' }}>Coming Soon</p>
            </div>
          } />
          <Route path="*" element={
            <div className="container" style={{ padding: '20vh 0', textAlign: 'center' }}>
              <h1>404</h1>
              <p className="subheadline" style={{ margin: '0 auto var(--space-8)' }}>This page doesn't exist. But the system you need does.</p>
              <a href="/" className="btn btn-primary">Go Home</a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
