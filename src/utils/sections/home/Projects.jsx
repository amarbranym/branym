import React from 'react'
import { Container } from '../../components/ui/elements/Container'
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
