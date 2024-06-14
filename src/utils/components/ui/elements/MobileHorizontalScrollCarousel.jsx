import React from 'react'
import Card from './Cards/Card'

const MobileHorizontalScrollCarousel = () => {
  return (
    <div className='flex flex-col gap-4 w-screen px-4'>
      {[...Array(8)].map((_, index) => (
        <CardWrapper key={index}>
          <Card />
        </CardWrapper>
      ))}
    </div>
  )
}

const CardWrapper = ({ children }) => {
    return <div className="flex-none">{children}</div>
  }
export default MobileHorizontalScrollCarousel
