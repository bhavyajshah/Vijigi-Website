import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AboutContent from '../../components/AboutContent/AboutContent'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us | Vijigi Energy</title>
        <meta name="description" content="Vijigi Energy draws inspiration from `Vijigisha` Sanskrit for an intense desire for a prosperous life." />
      </Helmet>
    <Header/>
    <AboutContent/>
    <Footer/>
   </React.Fragment>
  )
}

export default About