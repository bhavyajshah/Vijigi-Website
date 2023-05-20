import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Contactform from '../../components/Contactform/Contactform'
import Helmet from 'react-helmet'

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact Us | Vijigi Energy </title>
        <meta name="description" content="Get in touch with Vijigi Energy for any inquiries or collaboration opportunities. Reach out to our team and let's drive sustainable solutions together for a brighter future." />
      </Helmet>
      <Header />
      <Contactform/>
      <Footer />
    </React.Fragment>
  )
}

export default Contact