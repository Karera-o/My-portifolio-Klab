import React from 'react'
import Contact from './contact';
import Footer from './footer';
import ServiceCard from './serviceCard';
// import bg from '../Resources/bg.png'
import profile from '../Resources/profile.png'

const HomeSide = () => {
  return (
    <div className='w-full bg-slate-500 scroll-auto'>
      <div className='w-full h-[60vh] bg-slate-800 '>
        <div className='h-full w-full bg-bg bg-cover bg-center   bg-no-repeat flex flex-col items-center justify-end '>
            <div className='h-5/6 w-[95%] mx-4  bg-[#00000099] bg-cover  bg-center bg-no-repeat flex  flex-col sm:flex-row items-center justify-around gap-x-5  md:pl-12'>
            {/* brightness-[30%] */}
            <div className='flex flex-col  items-center md:items-start justify-center  md:w-2/5 gap-y-4 flex-1 opacity-100'>
            <h1 className='text-white font-bold text-xl md:text-4xl  w-4/5'>Discover my Amazing Art Space! </h1>

            <p > <span className='text-[#FFC107] font-bold'>&lt;code&gt;</span>I build web applications <span className='text-[#FFC107]'>&lt;code&gt;</span></p>
            
            <button className='bg-[#FFC107] text-black p-2 sm:w-1/5 w-4/6'>Explore Now</button>
        </div>
        
        
        <img src={profile} alt=""  className='hidden md:block md:w-45 md:h-60 self-end justify-self-end'/>
       
            </div>
            
        </div>
        <div className='flex sm:justify-around  pt-4 flex-wrap px-14 sm:px-0 gap-x-1'>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Years Experience</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>6+</span> Completed Projects</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>10+</span> Happy Customers</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Honors and Awards</p>
        </div>
        <div className='mt-10 mx-3'>
          <h1 className='text-2xl mb-5'>My services</h1>
          <div className='flex gap-1 flex-col sm:flex-row'>
          <ServiceCard  title='Back-end developer'/>
          <ServiceCard title='Front-end developer'/>
          <ServiceCard title='UI/UX designer'/>
          </div>
        </div >
        <div className='my-16'>
        <Contact />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default HomeSide