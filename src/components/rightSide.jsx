import React from 'react'
import menu from '../Resources/Menu.png'

const RightSide = () => {
  return (
    <div className='bg-[#20202a] flex flex-col  items-center gap-y-8 h-full'>
      <span className='bg-[#242430] w-full flex items-center justify-center h-16'><img src={menu} alt="" className='w-7 h-9'/></span>
      <p className='uppercase rotate-90 text-[#7B7B7F]'>home</p>
    </div>
  )
}

export default RightSide