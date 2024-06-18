import { Container } from '@/utils/components/ui/elements/Container'
import Fade from '@/utils/components/ui/elements/Fade'
import MyClient from '@/utils/components/ui/elements/MyClient'
import React from 'react'

const Client = () => {
  return (
    <Fade  data-aos="fade-up"
    data-aos-delay="100" className="mt-20">
      <Container>
        <MyClient />
      </Container>
    </Fade>
  )
}

export default Client
