import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Technology from './pages/Technology/Technology'
import Career from './pages/Career/Career'
import Contact from './pages/Contact/Contact'
import Error404Page from './components/Error404Page/Error404Page'
import './App.css'

  function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error404Page/>}/>

        </Routes>
      </Router>

    )
  }

export default App