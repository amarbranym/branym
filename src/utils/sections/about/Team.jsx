import React from 'react'
import { Container } from '@/utils/components/ui/elements/Container'
import { getTeam } from '@/utils/servies/Hygraph'
import HorizontalScrollCarousel from '@/utils/components/ui/elements/HorizontalScrollCarousel'
import TeamCard from '@/utils/components/ui/elements/Cards/TeamCard'
import TeamSlider from '@/utils/components/ui/elements/TeamSlider'

const Team = async () => {
  const { teams } = await getTeam();
  console.log("tems", teams)

  return (
    <section className="py-10">
      <Container>
        <h3 className="font-sans text-5xl font-semibold text-white lg:mb-6 lg:text-7xl">
          People behind the
          <span className="text-[#F43636]"> awesomeness</span>
        </h3>
      </Container>
      <TeamSlider teams={teams} />
    </section>
  )
}

export default Team
