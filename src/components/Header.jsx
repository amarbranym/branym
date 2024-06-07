import Logo from '@/images/Logo.png'
import { Container } from './Container'
import Image from 'next/image'
import MenuBars from './icons/MenuBars'
import StrokeButton from './StrokeButton'

const Header = () => {
  return (
    <header className=" fixed min-w-[22.5rem] left-0 top-0 py-6 z-50 w-screen ">
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
