import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import './Layout.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="navbar-logo">
                            <span className="logo-icon"></span>
                            <span className="logo-text">Business AI Labs</span>
                        </Link>
                        <p className="footer-description">
                            We design and install smart automation systems that reduce manual work,
                            capture more leads, and help your business grow without adding headcount.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Services</h4>
                        <Link to="/services">Marketing Automation</Link>
                        <Link to="/services">24/7 Customer Response</Link>
                        <Link to="/services">Operations Workflows</Link>
                        <Link to="/services">Automated Insights</Link>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Company</h4>
                        <Link to="/how-it-works">How It Works</Link>
                        <Link to="/results">Results</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/book-call">Contact</Link>
                    </div>
                </div>

                <div className="footer-cta-card glass-panel">
                    <div className="footer-cta-content">
                        <h3>Ready to run a smarter business?</h3>
                        <p>Find out how much time and payroll your business could reclaim.</p>
                    </div>
                    <Link to="/book-call" className="btn btn-primary">
                        Book Your Audit <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Business AI Labs. We install systems. You get results.
                    </div>
                    <div className="footer-socials">
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="GitHub"><Github size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
