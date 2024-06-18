import StrokeButton from '@/utils/components/ui/buttons/StrokeButton'
import { Container } from '@/utils/components/ui/elements/Container'
import Fade from '@/utils/components/ui/elements/Fade'
import PlayIcon from '@/utils/components/ui/icons/PlayIcon'
import React from 'react'

const HeroVideo = () => {
  return (
    <section className=" w-full pb-20  lg:pt-10">
      <Container className="">
        <Fade
          data-aos="fade-up"
          data-aos-delay="100"
          className="   text-7xl font-semibold "
        >
          <p className="text-center font-calsans text-2xl  text-white sm:text-5xl xl:text-7xl">
            We are a design agency based in India. We’ve worked with 20+ clients
            over 5 years and delivering{' '}
            <span className="text-[#FF720D]"> tailor-made solutions </span> that
            actually fits their vision. Since our inception, we have been
            committed to pushing the boundaries of creativity and innovation.
          </p>
        </Fade>
        <Fade
          data-aos="fade-up"
          data-aos-delay="150"
          className=" relative mt-10 aspect-square max-h-[673px]   w-full rounded-[48px] border-4 border-gray-500 bg-gradient-to-r  from-[#18181A] to-[#0F0F10] lg:mt-20"
        >
          <div className=" absolute bottom-8 left-4 ">
            <StrokeButton className="flex items-center gap-2 ">
              <div>
                <PlayIcon className="h-4 w-4" />
              </div>
              <span>Watch Video </span>
            </StrokeButton>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default HeroVideo
