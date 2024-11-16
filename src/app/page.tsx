import React from 'react'
import Navbar from './componenets/navbar'
import Hero from './componenets/hero'
import Feature from './componenets/feature'
import Footer from './componenets/footer'
import Seminar from './componenets/imageslider'
import ImageSlider from './componenets/imageslider'
import Cources from './componenets/cources'
import Advancecource from './componenets/advancecource'


function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Feature />
      <ImageSlider />
      <Cources />
      <Advancecource />
      <Footer />

    </div>
  )
}

export default Home