import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Layout.css'; // Add a dedicated layout css for these components if needed or just use index.css

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Results', path: '/results' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"></span>
          <span className="logo-text">Business AI Labs</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book-call" className="btn btn-primary btn-sm ml-4">
            Get Your Free Audit <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/book-call" className="btn btn-primary mobile-cta">
          Get Your Free Audit
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
