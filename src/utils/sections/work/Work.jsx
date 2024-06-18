import React from 'react'

import { Container } from '@/utils/components/ui/elements/Container'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import MobileHorizontalScrollCarousel from '@/utils/components/ui/elements/MobileHorizontalScrollCarousel'
import MyClient from '@/utils/components/ui/elements/MyClient'
import Card from '@/utils/components/ui/elements/Cards/Card'
import Fade from '@/utils/components/ui/elements/Fade'

const Work = () => {
  return (
    <section className="mt-14">
      <Container>
        <Fade data-aos="fade-up" data-aos-delay="200" className="flex  gap-4">
          <Card />
          <Card />
        </Fade>
      </Container>
    </section>
  )
}

export default Work
