"use client"
import React from 'react'
import { Container } from '../../components/ui/elements/Container'
import Card from '../../components/ui/elements/Cards/Card'
import GradientLine from '../../components/ui/gradients/GradientLine'
import HorizontalScrollCarousel from '../../components/ui/elements/HorizontalScrollCarousel'
import MobileHorizontalScrollCarousel from '../../components/ui/elements/MobileHorizontalScrollCarousel'

const Projects = () => {
  return (
    <section className="">
      <Container>
        <div className="mx-auto w-[60%]">
          <GradientLine />
        </div>
      </Container>
      <div className=" mt-14">
        <HorizontalScrollCarousel data={[...Array(9)]}>
          {() => <Card/>}
        </HorizontalScrollCarousel>
      </div>
    </section>
  )
}

export default Projects
