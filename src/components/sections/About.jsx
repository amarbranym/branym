import React from 'react'
import { CarouselImages } from '@/data/imageData'
import Carousel from '../Carousel'
import { CarouselText,  CarouselText2 } from '@/data/imageData'
const About = () => {
  return (
    <div className="h-[100vh] w-full  overflow-hidden">
      <Carousel data={CarouselText} />
      <Carousel data={CarouselText2} leftToRight={true} className="translate-x-[-20%]" />
    </div>
  )
}

export default About
