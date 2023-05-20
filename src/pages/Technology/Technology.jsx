import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TechnologyPage from '../../components/TechnologyPage/TechnologyPage'
import Helmet from 'react-helmet'

const Technology = () => {
  return (
 <React.Fragment>
      <Helmet>
        <title>Latest Technology Used | Vijigi Energy </title>
        <meta name="description" content="Discover Vijigi Energy's cutting-edge technology, driving sustainable solutions for a brighter, greener future. Explore our latest advancements and be part of the innovation journey." />
      </Helmet>
  <Header/>
<TechnologyPage/>
  <Footer/>
 </React.Fragment>
  )
}

export default Technology