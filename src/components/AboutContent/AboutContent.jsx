import React from 'react';
import './AboutContent.css';
import AboutVijigiLogo from '../AboutVijigiLogo/AboutVijigiLogo';
import AboutMeetKalola from '../AboutMeetKalola/AboutMeetKalola';
import AboutSupport from '../AboutSupport/AboutSupport';

const AboutUs = () => {
    return (
        <>
            <div className="container">
                <div className="hero-sections">
                    <div className="row m-auto">
                        <AboutVijigiLogo />
                        <AboutMeetKalola/>
                </div>
                </div>
            </div>
          <AboutSupport/>
        </>
    );
};

export default AboutUs;
