import Carousel from '@/components/Carousel'
import { CarouselText, CarouselText2 } from '@/data/imageData'
import React from 'react'

const Skills = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="  mx-auto flex justify-center">
        <div className="  mt-2 lg:mt-6">
          <div>
            <Carousel data={CarouselText} />
          </div>
          <div className="lg:mt-6">
            <Carousel data={CarouselText2} leftToRight={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
