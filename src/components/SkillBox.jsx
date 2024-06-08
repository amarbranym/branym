import React from 'react'

const SkillBox = ({ text }) => {
  return (
    <div className="text-md  cursor-pointer rounded-md border border-white w-[250px] h-[60px] flex justify-center items-center  ">
      {text}
    </div>
  )
}

export default SkillBox
