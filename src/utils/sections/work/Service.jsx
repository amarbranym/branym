import IconButton from '@/utils/components/ui/buttons/IconButton'
import Chip from '@/utils/components/ui/elements/Chip'
import { Container } from '@/utils/components/ui/elements/Container'
import Fade from '@/utils/components/ui/elements/Fade'
import SearchIcon from '@/utils/components/ui/icons/SearchIcon'
import Link from 'next/link'
import React from 'react'
const badgesData = ['All', 'Branding', 'Ui/UX Design', 'Media', 'Development']
const Service = () => {
  return (
    <section>
      <Container>
        <Fade
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative mx-auto mt-8 rounded-md shadow-sm lg:w-[70%]"
        >
          <input
            type="text"
            name="account-number"
            id="account-number"
            className="block w-full rounded-full border-0 bg-transparent px-10 py-6 text-white ring-[1px] ring-inset ring-white placeholder:text-lg placeholder:text-gray-400 focus:ring-2  focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IconButton className="p-4">
              <SearchIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </Fade>
        <div className=" mt-24 flex justify-center">
          <div className=" lg:inline-block ">
            <Fade
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-wrap  items-center justify-center gap-2 "
            >
              {badgesData.map((value, index) => (
                <Link passHref href="/all" legacyBehavior>
                  <Chip
                    className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                    text={value}
                    key={index}
                  />
                </Link>
              ))}
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Service
