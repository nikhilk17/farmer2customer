import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Services from '../components/Services/Services'
import Category from '../components/Category/Category'
const Home = () => {
  return (
    <div>
      <>
      <Hero />
      <Category/>
      <FeaturedProducts />
      <Services />
      </>
    </div>
  )
}

export default Home
