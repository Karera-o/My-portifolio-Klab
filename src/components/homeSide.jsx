import React from 'react'
import Contact from './contact';
import Footer from './footer';
import ServiceCard from './serviceCard';
// import bg from '../Resources/bg.png'
import profile from '../Resources/profile.jpg'

const HomeSide = () => {
  return (
    <div className='w-full bg-slate-500 scroll-auto'>
      <div className='w-full h-[60vh] bg-slate-800 '>
        <div className='h-full w-full bg-bg bg-cover bg-center   bg-no-repeat flex flex-col items-center justify-end '>
            <div className='h-5/6 w-[95%] mx-4 bg-black bg-cover opacity-60 bg-center bg-no-repeat flex  flex-col sm:flex-row items-center justify-around gap-x-5 md:pr-32 md:pl-12'>
            {/* brightness-[30%] */}
            <div className='flex flex-col  items-center md:items-start justify-center  md:w-2/5 gap-y-4 flex-1 opacity-100'>
            <h1 className='text-white font-bold text-xl md:text-4xl  w-full'>Discover my Amazing Art Space! </h1>

            <p > <span className='text-[#FFC107] font-bold'>&lt;code&gt;</span>I build web applications <span className='text-[#FFC107]'>&lt;code&gt;</span></p>
            
            <button className='bg-[#FFC107] text-black p-2 md:w-1/5 w-full'>Explore Now</button>
        </div>
        {/* <img src="./PHOTO 3.jpg" alt="profile"/> */}
        {/* <img src={profile} alt=""  className='w-40 h-50 self-end'/> */}
            </div>
            
        </div>
        <div className='flex sm:justify-around  pt-4 flex-wrap px-14 sm:px-0 gap-x-1'>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Years Experience</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Completed Projects</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Happy Customers</p>
            <p><span className='text-[#FFC107]  text-xl mr-1'>2+</span> Honors and Awards</p>
        </div>
        <div className='mt-10 mx-3'>
          <h1 className='text-2xl mb-5'>My services</h1>
          <div className='flex gap-1 flex-col sm:flex-row'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
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