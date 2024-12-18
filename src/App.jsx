import React from 'react'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentList from './components/ApartmentList'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Banner />
        <ApartmentList />
      </Wrapper>
        <Footer />
    </div>
  )
}

export default App