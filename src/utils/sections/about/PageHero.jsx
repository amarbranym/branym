import React from 'react'
import { Container } from '../../components/ui/elements/Container'
import BlueGradient from '../../components/ui/gradients/BlueGradient'
import WhoWeAre from '@/utils/components/ui/icons/WhoWeAre'
import StrokeButton from '@/utils/components/ui/buttons/StrokeButton'
import PlayIcon from '@/utils/components/ui/icons/PlayIcon'
import ReusableHero from '@/utils/components/ui/elements/ReusableHero'

const PageHero = () => {
  return (
    <>
      <ReusableHero title="About Us" icon={WhoWeAre}>
        {/* Any additional children elements can be passed here */}
      </ReusableHero>
    </>
    // <section className="hero_bg flex w-full overflow-hidden ">
    //   <div className="relative w-full">
    //     <div className="relative z-[50] flex w-full justify-center pb-32 pt-[20rem]">
    //       <h1 className="font-sans text-4xl font-semibold uppercase text-white">
    //         About us
    //       </h1>
    //     </div>
    //     <div className="absolute bottom-0 left-1/2 z-[10]  -translate-x-1/2">
    //       <WhoWeAre className="w-screen scale-100" />
    //     </div>
    //     <div className="transfrom absolute left-1/2 top-0  z-[15]    -translate-x-1/2  rotate-180 object-cover   ">
    //       <BlueGradient />
    //     </div>

    //     <div className="absolute bottom-0 left-0 right-0  z-[20]  h-[300px] w-full bg-gradient-to-t from-black/100 to-black/0"></div>
    //   </div>
    // </section>
  )
}

export default PageHero
