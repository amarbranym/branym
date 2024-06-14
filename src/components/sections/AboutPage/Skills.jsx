import Carousel from '@/components/Carousel'
import { Container } from '@/components/Container'
import ProgressBar from '@/components/utils/ProgressBar'
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
      <Container className="py-20">
        <div>
          <h2 className=" font-calsans text-6xl font-semibold text-white">
            Our mission is to provide customer-centric, result-oriented
            innovative IT Solutions across the globe.
          </h2>
          <div className=" mt-10 grid grid-cols-8 gap-8">
            <div className=" col-span-full text-white md:col-span-4 ">
              <p className="text-lg    ">
                Our team understand the needs and requirements of our customer
                and make technology to resolve the needs, with the best UX
                possible for the target audience. We believe to explore new
                opportunities and technologies that maximises the business
                value, consistent growth and sustainability which enables our
                clients to become more agile and competitive.
              </p>
              <p className="mt-4 text-lg">
                Our team understand the needs and requirements of our customer
                and make technology to resolve the needs, with the best UX
                possible for the target audience.
              </p>
            </div>
            <div className=" col-span-full  flex flex-col gap-6  md:col-span-4 ">
              <ProgressBar name="Deliverability" percentage="95%" />
              <ProgressBar name="Efficiency" percentage="98%" />
              <ProgressBar name="Innovation " percentage="95%" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
