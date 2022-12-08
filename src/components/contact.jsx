import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-2xl ml-3 mb-10'>Contact information</h1>
        <div className='flex gap-2 justify-around flex-col sm:flex-row'>
            <ContactCard1/>
            <ContactCar2 />
        </div>
    </div>
  )
}

export default Contact


const ContactCard1 = ()=>{
    return(
        <div className='flex flex-col  sm:w-2/6 bg-[#2C2C38] p-4 text-sm'>
            <p className='flex justify-between'>Residence: <span>Rwanda</span></p>
                <p className='flex justify-between'>City: <span>Kigali</span></p>
                <p className='flex justify-between'>District: <span>Gasabo</span></p>
        </div>
    )
}
const ContactCar2 = ()=>{
    return(
        <div className='flex flex-col sm:w-3/6 bg-[#2C2C38] p-4 text-sm'>
            <p className='flex justify-between'>Email: <span>olivierkarera2020@gmail.com</span></p>
                <p className='flex justify-between'>Linkedin: <span>linkedin.com/in/karera-o</span></p>
                <p className='flex justify-between'>Github: <span>https://github.com/Karera-o</span></p>
                <p className='flex justify-between'>Twitter: <span>https://twitter.com/OlivierKarera1</span></p>
        </div>
    )
}