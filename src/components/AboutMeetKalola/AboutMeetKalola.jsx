import React from 'react'
import About_Image from '../../assets/Meet_kalola.jpeg'
import Logo1 from '../../assets/image1.png'
import Logo2 from '../../assets/image2.png'
import Logo3 from '../../assets/image3.png'

const AboutMeetKalola = () => {
  return (
  <>
          <div className="col-lg-6">
              <div className="founder-section">

                  <img src={About_Image} alt="Founder" className="img-fluid rounded-circle mb-3" />
                  <h2 style={{ fontWeight: 'bold' }}>Founder of Vijigi</h2>
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
  </>
  )
}

export default AboutMeetKalola