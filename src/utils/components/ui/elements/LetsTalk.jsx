import React from 'react'
import Fade from './Fade'
import LetsTalkForm from './LetsTalkForm'
import LetstalkEmail from './LetstalkEmail'
import LetsTalkCall from './LetsTalkCall'
import LetsTalkBook from './LetsTalkBook'

const LetsTalk = () => {
  return (
    <div className="py-12 lg:py-32">
      <div className="mb-12 text-center lg:mb-24">
        <h1 className="text-7xl font-semibold text-white lg:text-[7.5rem]">
          Let's Talk
        </h1>
      </div>
      <div class=" my-14 grid grid-cols-2 grid-rows-4 gap-3 font-calsans sm:gap-4 lg:grid-cols-8">
        <Fade
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-span-2 row-span-4  flex items-center justify-center rounded-2xl bg-[#18181A] p-4  sm:col-span-2  lg:col-span-4 lg:p-8"
        >
          <LetsTalkForm />
        </Fade>
        <Fade
          data-aos="fade-up"
          data-aos-delay="150"
          className="col-span-2 rounded-2xl bg-[#18181A] px-4 py-6 sm:col-span-1   lg:col-span-2 lg:row-span-2 lg:h-[15rem] lg:py-8 xl:px-8 "
        >
          <LetstalkEmail />
        </Fade>

        <Fade
          data-aos="fade-up"
          data-aos-delay="200"
          className="col-span-2 rounded-2xl bg-[#18181A] px-4 py-6 sm:col-span-1   lg:col-span-2 lg:row-span-2 lg:h-[15rem] lg:py-8 xl:px-8 "
        >
          <LetsTalkCall />
        </Fade>
        <Fade
          data-aos="fade-up"
          data-aos-delay="250"
          className="col-span-full rounded-2xl bg-[#18181A] px-4 py-6   sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:px-8 lg:py-10"
        >
          <LetsTalkBook />
        </Fade>
      </div>
    </div>
  )
}

export default LetsTalk
