import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
    </div>
  )
}

export default Home