import React from 'react'
import proj1 from '../Resources/proj1.png'
import proj2 from '../Resources/proj2.png'
import proj3 from '../Resources/proj3.png'
import proj4 from '../Resources/proj4.png'
import proj5 from '../Resources/proj5.png'
import Footer from './footer';
const Projects = () => {

    const show = ()=>{

    }

    const projects = [proj1,proj2,proj3,proj4,proj5,proj3,proj4,proj5]
  return (
    <div className='mx-2 sm:mx-10'>
    <nav className='flex justify-between text-[#7D7D80] py-4 uppercase sm:mx-14'>
       <a href="/" className='font-bold text-white no-underline'>Portifolio</a>
       <div className='sm:flex gap-x-4 hidden '>
       <a href="/" className='font-bold text-white no-underline hover:text-[#FFC107]'>All Categories</a>
       <a href="/" className='text-[#7D7D80] no-underline hover:text-[#FFC107]'>UI/UX </a>
       <a href="/" className='text-[#7D7D80] no-underline hover:text-[#FFC107]'>Front-end</a>
       <a href="/" className='text-[#7D7D80] no-underline hover:text-[#FFC107]'>Back-end</a>
      
    </div>
    </nav>
       <div className='flex gap-3 flex-wrap justify-center'>
       {projects.map(value =>{
        return(
            <div className='relative w-full sm:w-auto'>
            <img src={value} alt="" className='rounded hover:brightness-75 w-[100vw] sm:w-auto' onMouseOver={show}/>
            <div className='bg-[#242430] p-10 absolute w-full bottom-[0rem]'>
           
                <h3 className='font-extrabold uppercase text-sm'>Title</h3>
                <button className='text-[#FFC107] font-semibold uppercase text-xs '>Read more  ></button>
            </div>
            </div>
        )
       })}
       </div>
       <footer className='mt-5'>
          <Footer />
        </footer>
       </div>
  )
}

export default Projects