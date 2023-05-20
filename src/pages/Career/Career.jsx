import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CareerField from '../../components/CareerField/CareerField'
import { Helmet } from 'react-helmet';

const Career = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Career | Join a Team | Vijigi Energy</title>
        <meta name="description" content="Join us on a fulfilling journey at Vijigi Energy, where we aim to create a proud legacy for our grandkids through longevity, prosperity, and meaningful work Together" />
      </Helmet>
      <Header />
  <CareerField/>
      <Footer />
    </React.Fragment>
  )
}

export default Career