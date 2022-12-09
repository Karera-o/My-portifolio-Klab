import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='bg-[#2C2C38]  sm:w-2/4 mx-1 flex flex-col gap-y-2 p-4 m-2'>
        <h2 className='text-lg mb-4'>{props.title}</h2>
            <p className='text-[#868688]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
            <a href="/" className='text-[#FFC107] font-bold uppercase'>Order Now ></a>
    </div>
  )
}

export default ServiceCard