import React from 'react'

import { Container } from '@/utils/components/ui/elements/Container'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import MobileHorizontalScrollCarousel from '@/utils/components/ui/elements/MobileHorizontalScrollCarousel'
import MyClient from '@/utils/components/ui/elements/MyClient'
import Card from '@/utils/components/ui/elements/Cards/Card'

const Projects = () => {
  return (
    <>
      <section className="mt-14">
        <Container>
          <div className="flex  gap-4">
            <Card />
            <Card />
          </div>
        </Container>
      </section>
      <section className="mt-20">
        <Container>
          <MyClient />
        </Container>
      </section>
    </>
  )
}

export default Projects
