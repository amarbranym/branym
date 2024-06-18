import React from 'react'
import MyClient from '@/utils/components/ui/elements/MyClient'
import Fade from '@/utils/components/ui/elements/Fade'
import { Container } from '@/utils/components/ui/elements/Container'

const Client = () => {
  return (
    <section className="py-14">
      <Fade data-aos="fade-up" data-aos-delay="250">
        <Container>
          <MyClient />
        </Container>
      </Fade>
    </section>
  )
}

export default Client
