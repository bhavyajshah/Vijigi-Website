import React from 'react'
import Header from '../../components/Header/Header'
import VisionSlider from '../../components/VisionSlider/VisionSlider'
import Footer from '../../components/Footer/Footer'
import Mission from '../../components/Mission/Mission'
const Landing = () => {
  return (
      <React.Fragment>
          <Header/>
          <VisionSlider />
          <Mission/>
          <Footer />
      </React.Fragment>
  )
}

export default Landing