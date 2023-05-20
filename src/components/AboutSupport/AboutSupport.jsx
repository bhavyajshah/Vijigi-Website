import React from 'react'
import Support1 from '../../assets/Support1.png'
import Support2 from '../../assets/Support2.png'

const AboutSupport = () => {
  return (
    <>

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
  )
}

export default AboutSupport