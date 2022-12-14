import React, { useState } from 'react'
import HomeSide from '../components/homeSide';
import LeftSide from '../components/leftSide';
import Projects from '../components/projects';
import RightSide from '../components/rightSide';

import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import RightDrawer from '../components/rightDrawer';
import { HiMenu } from 'react-icons/hi';
import LeftDrawer from '../components/leftDrawer';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Home = () => {
  const [open,setOpen] = useState()
  const [leftOpen,setLeftOpen] = useState()
  const showDrawer =()=>{
    setOpen(true)
  }
  const onClose = ()=>{
    setOpen(false)
  }

  const showLeftDrawer =()=>{
    setLeftOpen(true)
  }
  const onLeftClose = ()=>{
    setLeftOpen(false)
  }


  return (
    <div className=' box-border h-[100%] grid grid-cols-10 mx-auto'>
    
        <div className='bg-[#191923] p-1 hidden lg:block col-span-2'><LeftSide/></div>
        
        <div className='bg-[#20202A] p-1 col-span-10 md:col-span-9 lg:col-span-7 overflow-y-auto no-scrollbar'>

        <div className='flex  sm:hidden bg-[#252530] items-center justify-between pr-4 py-2 w-full'>
        <button className='flex items-center justify-center p-2 sm:hidden'><BsThreeDotsVertical size='1.5rem' className='fill-[#868688] hover:fill-white' onClick={showLeftDrawer}/></button>
      
      <button className='flex items-center justify-center p-2 sm:hidden'><HiMenu size='1.5rem' className='fill-[#868688] hover:fill-white' onClick={showDrawer}/></button>
      <LeftDrawer onClose={onLeftClose} open={leftOpen}/>
      <RightDrawer onClose={onClose} open={open}/>
    </div>
        <Router >
          <Routes>
            <Route element={<HomeSide/>} path='/'></Route>
            <Route element={<Projects/>} path='/portifolio'></Route>
          </Routes>
        </Router>
        </div>

        <div className='bg-[#20202a] m-1 hidden md:block mr-8'><RightSide/></div>
      
    </div>
  )
}

export default Home