'use client'
import React from 'react'
import { Container } from '../Container'
import GradientLine from '../Gradient/GradientLine'
import HorizontalScrollCarousel from '../HorizontalScrollCarousel'

const Projects = () => {
  return (
    <section className="">
      <Container>
        <div className="mx-auto w-[60%]">
          <GradientLine />
        </div>
      </Container>
      <div className="mt-14">
        <HorizontalScrollCarousel />
      </div>
    </section>
  )
}

export default Projects
