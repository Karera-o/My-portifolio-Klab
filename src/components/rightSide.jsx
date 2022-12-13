import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import RightDrawer from './rightDrawer';
 
const RightSide = () => {

  const [open,setOpen] = useState()
  const showDrawer =()=>{
    setOpen(true)
  }
  const onClose = ()=>{
    setOpen(false)
  }

  return (
    <div className='bg-[#20202a] flex flex-col  items-center gap-y-8 h-full pt-3'>
      <span className='bg-[#242430] w-full h-16 flex items-center justify-center'><HiMenu size='2rem' className='fill-[#868688] hover:fill-white' onClick={showDrawer}/></span>
      <p className='uppercase rotate-90 text-[#7B7B7F]'>home</p>
      <RightDrawer onClose={onClose} open={open}/>
    </div>
  )
}

export default RightSide