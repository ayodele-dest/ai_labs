import React from 'react';
import './Layout.css';

const BackgroundGlow: React.FC = () => {
    return (
        <div className="background-glow-container">
            <div className="glow-orb primary-orb"></div>
            <div className="glow-orb accent-orb"></div>
            <div className="glow-orb secondary-orb"></div>
            <div className="noise-overlay"></div>
        </div>
    );
};

export default BackgroundGlow;
