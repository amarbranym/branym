'use client'
import React from 'react'
import { Container } from '@/utils/components/ui/elements/Container'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import TeamCard from '@/utils/components/ui/elements/Cards/TeamCard'

const Team = ({ teams }) => {
  return (
    <section className="py-10">
      <Container>
        <h3 className="font-sans text-5xl font-semibold text-white lg:mb-6 lg:text-7xl">
          People behind the
          <span className="text-[#F43636]"> awesomeness</span>
        </h3>
      </Container>
      <HorizontalScrollCarousel data={teams}>
        {(item) => <TeamCard item={item} />}
      </HorizontalScrollCarousel>
    </section>
  )
}

export default Team
