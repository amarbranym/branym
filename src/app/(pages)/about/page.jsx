import Client from '@/utils/sections/about/Client'
import HeroVideo from '@/utils/sections/about/HeroVideo'
import PageHero from '@/utils/sections/about/PageHero'
import Skills from '@/utils/sections/about/Skills'
import Team from '@/utils/sections/about/Team'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero />
      <HeroVideo/>
      <Skills />
      <Team />
      <Client />
    </>
  )
}

export default page
