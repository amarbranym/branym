'use client'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Fade from './Fade'
import PlayIcon from '../icons/PlayIcon'
import StrokeButton from '../buttons/StrokeButton'
import PauseIcon from '../icons/PauseIcon'

const PlayVideo = ({ src }) => {
  const [playingToggle, setPlayingToggle] = useState(false)
  return (
    <Fade
      data-aos="fade-up"
      data-aos-delay="150"
      className=" relative mt-10 aspect-video max-h-[673px]   w-full overflow-hidden rounded-[48px] border-4 border-gray-500  bg-gradient-to-r from-[#18181A] to-[#0F0F10] lg:mt-20"
    >
      <div className="player-wrapper h-full w-full">
        <ReactPlayer
          className="react-player "
          url={src}
          width="100%"
          height="100%"
          playing={playingToggle}
          // controls
        />
      </div>

      <div className=" absolute bottom-4 left-4 ">
        <StrokeButton
          className="flex items-center gap-2 "
          onClick={() => setPlayingToggle(!playingToggle)}
        >
          {!playingToggle ? (
            <>
              <div>
                <PlayIcon className="h-4 w-4" />
              </div>
              <span>Play Video</span>
            </>
          ) : (
            <>
              <div>
                <PauseIcon className="h-4 w-4" />
              </div>
              <span>Pause Video</span>
            </>
          )}
        </StrokeButton>
      </div>
    </Fade>
  )
}

export default PlayVideo
