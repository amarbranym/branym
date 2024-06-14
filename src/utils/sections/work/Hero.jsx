import IconButton from '@/utils/components/ui/buttons/IconButton'
import StrokeButton from '@/utils/components/ui/buttons/StrokeButton'
import Badges from '@/utils/components/ui/elements/Badges'
import { Container } from '@/utils/components/ui/elements/Container'
import BlueGradient from '@/utils/components/ui/gradients/BlueGradient'
import Portfolio from '@/utils/components/ui/icons/Portfolio'
import SearchIcon from '@/utils/components/ui/icons/SearchIcon'
import React from 'react'
const Hero = () => {
  return (
    <>
      <section className="hero_bg flex w-full overflow-hidden ">
        <div className="relative w-full">
          <div className="relative z-[50] flex w-full justify-center pb-32 pt-[20rem]">
            <h1 className="font-sans text-4xl font-semibold uppercase text-white">
              our work
            </h1>
          </div>
          <div className="absolute bottom-0 left-1/2 z-[10]  -translate-x-1/2">
            <Portfolio className="w-screen scale-100" />
          </div>
          <div className="transfrom absolute left-1/2 top-0  z-[15]    -translate-x-1/2  rotate-180 object-cover   ">
            <BlueGradient />
          </div>

          <div className="absolute bottom-0 left-0 right-0  z-[20]  h-[300px] w-full bg-gradient-to-t from-black/100 to-black/0"></div>
        </div>
      </section>
      <section>
        <Container>
          <div className="relative mx-auto mt-8 rounded-md shadow-sm lg:w-[70%]">
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
          </div>
          <div className=" mt-24 flex justify-center">
            <div className=" lg:inline-block ">
              <div className="flex flex-wrap  items-center justify-center gap-2 ">
                <Badges
                  className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                  text="All"
                />
                <Badges
                  text="Branding"
                  color="#3100BB"
                  className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                />
                <Badges
                  text="Ui/UX Design"
                  color="#3100BB"
                  className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                />
                <Badges
                  text="Meida"
                  color="#3100BB"
                  className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                />
                <Badges
                  text="Development"
                  color="#3100BB"
                  className="  border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
