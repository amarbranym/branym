import React from 'react'

import Card from '@/utils/components/ui/elements/Cards/Card'
import Fade from '@/utils/components/ui/elements/Fade'

const Work = ({ works }) => {
  return (
    <section className="mt-14">
      <div className="mx-auto grid w-fit grid-cols-1 sm:grid-cols-2  gap-3 lg:gap-4 px-3">
        {works.map((item, index) => (
          <Fade
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
            className="col-span-1"
          >
            <Card item={item} index={index} />
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default Work
