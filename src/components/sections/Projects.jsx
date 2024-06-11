'use client'
import React from 'react'
import { Container } from '../Container'
import GradientLine from '../Gradient/GradientLine'
import HorizontalScrollCarousel from '../HorizontalScrollCarousel'
import MobileHorizontalScrollCarousel from '../MobileHorizontalScrollCarousel'

const Projects = () => {
  return (
    <section className="">
      <Container>
        <div className="mx-auto w-[60%]">
          <GradientLine />
        </div>
      </Container>
      <div className=" mt-14 hidden sm:block">
        <HorizontalScrollCarousel />
      </div>
      <div className="block sm:hidden">
        <MobileHorizontalScrollCarousel />
      </div>
    </section>
  )
}

export default Projects
