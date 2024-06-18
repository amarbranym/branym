import Client from '@/utils/sections/about/Client'
import Video from '@/utils/sections/about/Video'
import PageHero from '@/utils/sections/about/PageHero'
import Skills from '@/utils/sections/about/Skills'
import Team from '@/utils/sections/about/Team'
import React from 'react'
import { getTeam } from '@/utils/servies/Hygraph'

const page = async () => {
  const { teams } = await getTeam()

  return (
    <>
      <PageHero />
      <Video />
      <Skills />
      <Team teams={teams} />
      <Client />
    </>
  )
}

export default page
