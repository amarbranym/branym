import React from 'react'

import { Container } from '@/utils/components/ui/elements/Container'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import MobileHorizontalScrollCarousel from '@/utils/components/ui/elements/MobileHorizontalScrollCarousel'
import MyClient from '@/utils/components/ui/elements/MyClient'

const Projects = () => {
  return (
    <>
      <section className="mt-14">
        <div className="  hidden sm:block">
          <HorizontalScrollCarousel />
        </div>
        <div className="block sm:hidden">
          <MobileHorizontalScrollCarousel />
        </div>
      </section>
      <section className='mt-20'>
        <Container>
            <MyClient/>
        </Container>
      </section>
    </>
  )
}

export default Projects
