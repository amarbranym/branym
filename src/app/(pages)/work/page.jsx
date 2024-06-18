import Client from '@/utils/sections/work/Client'
import PageHero from '@/utils/sections/work/PageHero'
import Service from '@/utils/sections/work/Service'
import Work from '@/utils/sections/work/Work'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero />
      <Service />
      <Work />
      <Client />
    </>
  )
}

export default page
