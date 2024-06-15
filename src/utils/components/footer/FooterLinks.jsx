import React from 'react'
import Fade from '../ui/elements/Fade'
import Image from 'next/image'
import Logo from '@/images/Logo.png'

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
const FooterLinks = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-4 md:gap-8">
        <Fade
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-span-2 mt-6"
        >
          <Image
            className="w-40 object-contain object-left"
            src={Logo}
            alt="Company name"
          />
        </Fade>

        <div className=" col-span-2 mt-10 grid grid-cols-6 gap-6 md:mt-0">
          <Fade
            data-aos="fade-up"
            data-aos-delay="100"
            className="col-span-3 mt-6  md:col-span-2"
          >
            <h3 className="mb-6 font-bold text-white">Company</h3>{' '}
            <div>
              <ul role="list" className=" space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="leading-6 text-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="150"
            className="col-span-3 mt-6  md:col-span-2"
          >
            <h3 className="mb-6 font-bold text-white">Portfolio</h3>{' '}
            <div>
              <ul role="list" className=" space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="leading-6 text-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="200"
            className="col-span-3 mt-6  md:col-span-2"
          >
            <h3 className="mb-6 font-bold text-white">Contact</h3>{' '}
            <div>
              <ul role="list" className=" space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="leading-6 text-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </div>
      <Fade
        data-aos="fade-up"
        data-aos-delay="150"
        className="grid grid-cols-2 py-8 md:pt-20"
      >
        <div className="col-span-2 flex justify-start space-x-6 py-4 text-gray-300 md:order-2  md:col-span-1  md:px-4 md:py-8">
          <a className="text-sm">Terms & Conditions</a>
          <a className="text-sm">Privacy Policy</a>
          <a className="text-sm">Site map</a>
        </div>
        <p className="col-span-2 py-4 text-xs uppercase leading-5 text-gray-200 md:order-1 md:col-span-1 md:mt-0 md:py-8 md:text-sm">
          © BRANYM TECHNOLOGIES 2024. All rights Reserved.
        </p>
      </Fade>
    </>
  )
}

export default FooterLinks
