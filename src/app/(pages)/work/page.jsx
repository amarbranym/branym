import Client from '@/utils/sections/work/Client'
import PageHero from '@/utils/sections/work/PageHero'
import Service from '@/utils/sections/work/Service'
import Work from '@/utils/sections/work/Work'
import { getWorkList } from '@/utils/servies/Hygraph'
import React from 'react'

const page = async () => {
  const { works } = await getWorkList()
  return (
    <>
      <PageHero />
      <Service />
      <Work works={works} />
      <Client />
    </>
  )
}

export default page
