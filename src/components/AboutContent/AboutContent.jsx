import React from 'react';
import './AboutContent.css';
import About_Image from '../../assets/Meet_kalola.jpeg'
import Logo from '../../assets/vijigilogo.png';
import Logo1 from '../../assets/image1.png'
import Logo2 from '../../assets/image2.png'
import Logo3 from '../../assets/image3.png'
import Support1 from '../../assets/Support1.png'
import Support2 from '../../assets/Support2.png'

const AboutUs = () => {
    return (
        <>
        <div className="container">
            <div className="hero-sections">
                <div className="row m-auto">
                    <h1 className="text-center about">About MySelf</h1>
                    <div className="col-lg-6">
                        <div className="founder-sections">
                            <img src={Logo} alt="Founder" className="img-fluid mb-3 logo" />
                            <h2 style={{ fontWeight: 'bold' }}> Vijigi Logo Meaning</h2>
                            <p className="text-muted" style={{ textAlign: 'justify' }}>
                                We take our inspiration from the Sanskrit word Vijigisha meaning, "an intense desire to live a long life, filled with prosperity and pride". As Vijigi Energy, we aspire to live long, spread prosperity, and do work that our grandkids can be proud of.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="founder-section">

                            <img src={About_Image} alt="Founder" className="img-fluid rounded-circle mb-3" />
                            <h2 style={{fontWeight: 'bold'}}>Founder of Vijigi</h2>
                            <p className="text-muted" style={{ textAlign: 'justify' }}>Meet Kalola holds B.E. (Hons.) in Mechanical Engineering from BITS Pilani and MS in
                                Mechanical Engineering from the University of Michigan - Ann Arbor.
                                After graduating with Masters, Meet joined Nikola Motor Company in its very early
                                stage in 2017.
                            </p>
                            <p className='text-muted' style={{ textAlign: 'justify' }}>While working at Nikola for more than 5 years, Meet obtained valuable
                                first-hand experience of EV development from conception to production.</p>
                        </div>
                        <div className="partner-logos text-center mt-4">
                            <img src={Logo1} alt="BITS Pilani" className="img-fluid mx-2" />
                            <img src={Logo2} alt="University of Michigan" className="img-fluid mx-2" />
                            <img src={Logo3} alt="Nikola" className="img-fluid mx-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="supported-section mb-4">
                <div className="container">
                    <h1 className="text-center about">Supported by</h1>
                    <div className="supported-list">
                        <div className="supported-item">
                            <img src={Support2} alt="iCreate" className="img-fluid support" />
                        </div>
                        <div className="supported-item">
                            <img src={Support1} alt="Department for Promotion of Industry and Internal Trade" className="img-fluid support" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
