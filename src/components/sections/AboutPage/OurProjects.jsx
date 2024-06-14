import { Container } from '@/components/Container'
import MyClient from '@/components/MyClient'
import OwnerCard from '@/components/OwnerCard'
import React from 'react'

const OurProjects = () => {
  return (
    <>
      <section className='py-10'>
        <Container>
          <h3 className="font-sans text-7xl font-semibold text-white">
            People behind the{' '}
            <span className="text-[#F43636]">awesomeness</span>{' '}
          </h3>
          <div className="mt-10">
            <OwnerCard />
          </div>
        </Container>
      </section>
      <section className='mt-10'>
        <Container>
          <MyClient />
        </Container>
      </section>
    </>
  )
}

export default OurProjects
