
import MyClient from '@/utils/components/ui/elements/MyClient'
import OwnerCard from '@/utils/components/ui/elements/Cards/OwnerCard'
import React from 'react'
import { Container } from '@/utils/components/ui/elements/Container'

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
