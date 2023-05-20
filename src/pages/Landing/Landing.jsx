import React from 'react'
import Header from '../../components/Header/Header'
import VisionSlider from '../../components/VisionSlider/VisionSlider'
import Footer from '../../components/Footer/Footer'
import Mission from '../../components/Mission/Mission'
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
      <React.Fragment>
      <Helmet>
        <title>Vijigi Energy | Sustainable Mobility, Zero-Emission vehicle</title>
        <meta name="description" content="Experience the future of sustainable mobility with Vijigi Energy. Our solutions drive zero-emission vehicles towards a greener future." />
        <meta name="keywords" content="Vijigi Energy, sustainable mobility, zero-emission vehicle, future of transportation, greener future, sustainable solutions" />
      </Helmet>
          <Header/>
          <VisionSlider />
          <Mission/>
          <Footer />
      </React.Fragment>
  )
}

export default Landing