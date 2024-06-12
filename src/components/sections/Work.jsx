import React from 'react'
import MyClient from '../MyClient'
import { Container } from '../Container'
import Fade from '../utils/Fade'

const Work = () => {
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

export default Work
