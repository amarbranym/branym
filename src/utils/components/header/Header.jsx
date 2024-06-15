import Logo from '@/images/Logo.png'

import Image from 'next/image'
import MenuBars from '../ui/elements/MenuBars'
import StrokeButton from '../ui/buttons/StrokeButton'
import { Container } from '../ui/elements/Container'

const Header = () => {
  return (
    <header className="fixed min-w-[22.5rem] left-0 right-0 top-0 py-6 z-50 w-full">
      <Container>
        <div className="flex h-[72px] items-center gap-4">
          <div className="flex h-[72px] backdrop-blur-lg w-[72px] min-w-[72px] cursor-pointer items-center justify-center rounded-full border border-white">
            <MenuBars />
          </div>
          <div className="backdrop-blur-lg flex h-full w-full  items-center justify-center rounded-full border border-white p-4 md:justify-between ">
            <div className="mx-3 mt-[6px]">
              <Image src={Logo} alt="logo" width={130} />
            </div>
            <div className="hidden md:block">
              <StrokeButton>Contact Us</StrokeButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
