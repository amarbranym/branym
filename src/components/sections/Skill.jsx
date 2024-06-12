'use client'
import React from 'react'
import BGSkillOverly from '../Gradient/BGSkillOverly'
import { Container } from '../Container'
import GradientLine from '../Gradient/GradientLine'
import Fade from '../utils/Fade'
import Vector_left_1 from '@/images/skill/Vector_left_1.png'
import Vector_left_2 from '@/images/skill/Vector_left_2.png'
import Vector_right_1 from '@/images/skill/Vector_right_1.png'
import Vector_right_2 from '@/images/skill/Vector_right_2.png'
import GroupImage from '@/images/skill/GroupImage.png'
import SkillBox from '../SkillBox'
import Image from 'next/image'
import StrokeButton from '../StrokeButton'
const Skill = () => {
  return (
    <div className=" relative  overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
        <BGSkillOverly />
      </div>
      <Container>
        <div>
          <GradientLine />
        </div>
        <div className="py-14">
          <h2 className="m-auto px-6 text-center font-calsans text-4xl font-semibold text-white md:max-w-[800px] md:text-6xl ">
            We got all <span className="text-[#F43636]">superpowers</span> for
            you to conquer the market.
          </h2>
        </div>
        <Fade
          data-aos="fade-up"
          data-aos-delay="100"
          className=" grid grid-cols-1 items-center justify-items-center gap-8  text-white sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 ">
              <SkillBox text="Resource Planning" />
              <Image
                src={Vector_left_1}
                alt="vector1"
                className=" mt-6  hidden scale-75  md:scale-100  lg:block  "
              />
            </div>
            <div className="flex items-center gap-4 ">
              <SkillBox text="UI/UX Design" />
              <Image
                src={Vector_left_1}
                alt="vector1"
                className=" mt-6  hidden scale-75 md:scale-100  lg:block   "
              />
            </div>
            <div className="flex items-center gap-4">
              <SkillBox text="Development" />{' '}
              <Image
                src={Vector_left_2}
                alt="vector1"
                className=" mb-6  hidden scale-75 md:scale-100  lg:block "
              />
            </div>
            <div className="flex items-center gap-4">
              <SkillBox text="QA Testing" />{' '}
              <Image
                src={Vector_left_2}
                alt="vector1"
                className=" mb-6  hidden scale-75  md:scale-100  lg:block  "
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={GroupImage}
              alt="group"
              className="scale-74 md:scale-100"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Image
                src={Vector_right_1}
                alt="vector1"
                className=" mt-6  hidden scale-75  md:scale-100  lg:block  "
              />
              <SkillBox text="Graphic Design" />{' '}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={Vector_right_1}
                alt="vector1"
                className=" mt-6 hidden scale-75  md:scale-100  lg:block  "
              />
              <SkillBox text="Content Creation" />{' '}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={Vector_right_2}
                alt="vector1"
                className=" mb-6  hidden scale-75  md:scale-100  lg:block  "
              />
              <SkillBox text="Search Engine Optimisation" />{' '}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={Vector_right_2}
                alt="vector1"
                className=" mb-6   hidden scale-75 md:scale-100  lg:block  "
              />
              <SkillBox text="Maintenance & Support" />{' '}
            </div>
          </div>
        </Fade>
        <div className="py-14 text-center">
          <StrokeButton>Book a Free Call Now</StrokeButton>
        </div>
      </Container>
    </div>
  )
}

export default Skill
