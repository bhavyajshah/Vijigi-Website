import React from 'react'
import Logo from '../../assets/vijigilogo.png';

const AboutVijigiLogo = () => {
  return (
    <>
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
    </>
  )
}

export default AboutVijigiLogo