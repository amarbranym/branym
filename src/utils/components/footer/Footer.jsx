import React from 'react'
import Logo from '@/images/Logo.png'

import Union from '@/images/Union.svg'
import Image from 'next/image'
import Fade from '../ui/elements/Fade'
import { Container } from '../ui/elements/Container'

import LetsTalk from '../ui/elements/LetsTalk'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute bottom-0 z-[0]">
        <Image src={Union} alt="" className=" scale-100" />
      </div>
      <Container className={'z-[1] scale-100'}>
        <LetsTalk />
        <FooterLinks />
      </Container>
    </footer>
  )
}

export default Footer
