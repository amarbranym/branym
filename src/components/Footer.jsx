import React from 'react'
import { Container } from './Container'
import LetsTalk from './LetsTalk'
import Logo from '@/images/Logo.png'

import Union from '@/images/Union.svg'
import Image from 'next/image'
const navigation = {
  solutions: [
    { name: 'About Us', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Our Team', href: '#' },
  ],
  support: [
    { name: 'Services', href: '#' },
    { name: 'Work', href: '#' },
    { name: 'Clients', href: '#' },
  ],
  company: [
    { name: 'Contact Us', href: '#' },
    { name: 'Linked In', href: '#' },
    { name: 'Behance', href: '#' },
  
  ],

}
const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute bottom-0 z-[0]">
        <Image src={Union} alt="" className=" scale-100" />
      </div>
      <Container className={"z-[1] scale-100"}>
        <LetsTalk />
        <div className="md:grid md:grid-cols-4 md:gap-8">
          <div className="mt-6 col-span-2">
            <Image className="w-40 object-contain object-left" src={Logo} alt="Company name" />
          </div>

          <div className=" col-span-2 mt-10 grid grid-cols-6 gap-6 md:mt-0">
            <div className="mt-6 col-span-3  md:col-span-2">
            <h3 className='text-white mb-6 font-bold'>Company</h3>
              {' '}
              <div>
               
                <ul role="list" className=" space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 col-span-3  md:col-span-2">
              <h3 className='text-white mb-6 font-bold'>Portfolio</h3>
              {' '}
              <div>
               
                <ul role="list" className=" space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 col-span-3  md:col-span-2">
              <h3 className='text-white mb-6 font-bold'>Contact</h3>
              {' '}
              <div>
                <ul role="list" className=" space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 md:pt-20 grid grid-cols-2">
          <div className="py-4 md:py-8 flex md:px-4 justify-start col-span-2 md:col-span-1  space-x-6  text-gray-300 md:order-2">
            <a className='text-sm'>Terms & Conditions</a>
            <a className='text-sm'>Privacy Policy</a>
            <a className='text-sm'>Site map</a>
          </div>
          <p className="py-4 md:py-8 text-xs md:text-sm leading-5 uppercase text-gray-200 md:order-1 md:mt-0 col-span-2 md:col-span-1">
          © BRANYM TECHNOLOGIES 2024. All rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
