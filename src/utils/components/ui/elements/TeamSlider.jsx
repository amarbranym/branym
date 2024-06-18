'use client'
import React from 'react'
import HorizontalScrollCarousel from './HorizontalScrollCarousel'
import TeamCard from './Cards/TeamCard'

const TeamSlider = ({ teams }) => {
  return (
    <HorizontalScrollCarousel data={teams}>
      {(item) => <TeamCard item={item} />}
    </HorizontalScrollCarousel>
  )
}

export default TeamSlider
