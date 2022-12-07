import React from 'react'
import profile from '../Resources/profile.jpg'

const LeftSide = () => {
  return (
    <div className=' h-full bg-[#20202A]'>
      <div className='bg-[#242430] text-[#868688] flex flex-col items-center justify-center py-4'>
            <img src={profile} alt="" width="1200" className='rounded-full h-[5rem] w-[5rem]'/>
            <h1 className='text-white text-lg font-bold'>Karera Olivier</h1>
            <p>Front-end Developer </p>
            <p>UI/UX Designer</p>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default LeftSide