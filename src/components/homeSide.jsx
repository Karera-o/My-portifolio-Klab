import React from 'react'
import Contact from './contact';
import Footer from './footer';
import ServiceCard from './serviceCard';
// import bg from '../Resources/bg.png'

const HomeSide = () => {
  return (
    <div className='w-full bg-slate-500 scroll-auto'>
      <div className='w-full h-[60vh] bg-slate-800'>
        <div className='h-full w-full bg-bg bg-cover bg-center   bg-no-repeat flex flex-col items-center justify-end '>
            <div className='h-5/6 w-[95%] mx-4 bg-bg bg-cover contrast-50 bg-center bg-no-repeat '>
            {/* brightness-[30%] */}
            <div>
            <h1 className='text-white'>Discover my Amazing Art Space! </h1>

            <code> <code>I build web applications </code></code>
            
            <button>Explore Now</button>
        </div>
        <img src="./PHOTO 3.jpg" alt="profile"/>
            </div>
            
        </div>
        <div className='flex sm:justify-around  pt-4 sm:flex-wrap px-14 sm:px-0'>
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