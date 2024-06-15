import React from 'react'
import Logo from '@/images/Logo.png'

import Union from '@/images/Union.svg'
import Image from 'next/image'
import { Container } from '../ui/elements/Container'

import LetsTalk from '../ui/elements/LetsTalk'
import FooterLinks from './FooterLinks'
import LetsTalkForm from '../ui/elements/LetsTalkForm'
import LetstalkEmail from '../ui/elements/LetstalkEmail'
import LetsTalkCall from '../ui/elements/LetsTalkCall'
import LetsTalkBook from '../ui/elements/LetsTalkBook'
import Fade from '../ui/elements/Fade'

const ContactFooter = () => {
  return (
    <footer className="relative">
      <div className="absolute bottom-0 z-[0]">
        <Image src={Union} alt="" className=" scale-100" />
      </div>
      <Container className={'z-[1] scale-100'}>
        <div class=" my-14 grid grid-cols-2 grid-rows-4 gap-3 font-calsans sm:gap-4 lg:grid-cols-8">
          <Fade
            data-aos="fade-up"
            data-aos-delay="100"
            className=" col-span-full row-span-4  flex items-center justify-center rounded-2xl bg-[#18181A] p-4   lg:p-8"
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
        <FooterLinks />
      </Container>
    </footer>
  )
}

export default ContactFooter
