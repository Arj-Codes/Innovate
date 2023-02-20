import React from 'react'
import Blogs from '../components/Blogs'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className="flex flex-col">
   <Hero/>
   <SectionDivider/>
   <Trending/>
   <SectionDivider/>
   <Blogs/>
  </div>
  )
}

export default Home