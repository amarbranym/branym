'use client'
import React from 'react'
import { Container } from '@/utils/components/ui/elements/Container'
import { getTeam } from '@/utils/servies/Hygraph'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import TeamCard from '@/utils/components/ui/elements/Cards/TeamCard'

const Team = () => {
  // const { teams } = await getTeam();

  return (
    <section className="py-10">
      <Container>
        <h3 className="font-sans text-5xl font-semibold text-white lg:mb-6 lg:text-7xl">
          People behind the
          <span className="text-[#F43636]">awesomeness</span>
        </h3>
      </Container>
      <HorizontalScrollCarousel data={[{ yo: 'whatsup' }, { yo: 'whatsup' }]}>
        {() => <TeamCard />}
      </HorizontalScrollCarousel>
    </section>
  )
}

export default Team
