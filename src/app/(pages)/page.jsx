import React from 'react'
import Hero from '@/utils/sections/home/Hero'
import About from '@/utils/sections/home/About'
import Skill from '@/utils/sections/home/Skill'
import Works from '@/utils/sections/home/Works'
import Client from '@/utils/sections/home/Client'
import { getWorkList } from '@/utils/servies/Hygraph'

const page = async () => {
  const { works } = await getWorkList()
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Works works={works} />
      <Client />
    </>
  )
}

export default page
