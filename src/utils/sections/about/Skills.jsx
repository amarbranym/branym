import { Container } from '@/utils/components/ui/elements/Container'
import ProgressBar from '@/utils/components/ui/elements/ProgressBar'

import React from 'react'
import InfiniteCarousel from '@/utils/components/ui/elements/Carousel'
import Link from 'next/link'
import Fade from '@/utils/components/ui/elements/Fade'

const Skills = () => {
  return (
    <section className="w-full overflow-hidden">
      <InfiniteCarousel />
      <Container className="py-20">
        <div>
          <h2 className=" font-calsans text-4xl font-semibold text-white lg:text-6xl">
            Our mission is to provide customer-centric, result-oriented
            innovative IT Solutions across the globe.
          </h2>
          <div className=" mt-10 grid grid-cols-8 gap-8">
            <Fade
              data-aos="fade-up"
              data-aos-delay="50"
              className=" col-span-full text-white md:col-span-4 "
            >
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
            </Fade>
            <div className=" col-span-full  flex flex-col gap-5  md:col-span-4 ">
              <Fade data-aos="fade-up" data-aos-delay="100">
                <ProgressBar name="Deliverability" percentage="95%" />
              </Fade>
              <Fade data-aos="fade-up" data-aos-delay="150">
                <ProgressBar name="Efficiency" percentage="98%" />
              </Fade>
              <Fade data-aos="fade-up" data-aos-delay="200">
                <ProgressBar name="Innovation " percentage="95%" />
              </Fade>
              <Fade
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-end"
              >
                <Link
                  href="#"
                  className=" text-sm font-semibold  text-[#6153FF] underline "
                >
                  How we calculate our matrix?
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
