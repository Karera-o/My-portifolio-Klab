import React from 'react'
import HomeSide from '../components/homeSide';
import LeftSide from '../components/leftSide';
import RightSide from '../components/rightSide';

const Home = () => {
  return (
    <div className=' box-border h-[100%] grid grid-cols-10 mx-auto'>
    
        <div className='bg-[#191923] p-1 hidden lg:block col-span-2'><LeftSide/></div>
        <div className='bg-purple-700  col-span-10 md:col-span-9 lg:col-span-7'><HomeSide/></div>
        <div className='bg-[#20202a]  hidden md:block mr-8'><RightSide/></div>
      
    </div>
  )
}

export default Home