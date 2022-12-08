import React from 'react'
import user from '../Resources/User.png'
import email from '../Resources/Atsign.png'
import message from '../Resources/Envelope.png'

const Contact = () => {
  return (
    <div>
        <h1 className='text-2xl ml-3 mb-10'>Contact information</h1>
        <div className='flex gap-2 justify-around flex-col sm:flex-row'>
            <ContactCard1/>
            <ContactCar2 />
        </div>
        <h1 className='text-2xl ml-3 my-10'>Get in touch</h1>
        <div>
            <FormContact />
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




const FormContact = ()=>{
    return(
        <form className='bg-[#2B2B37] p-2 sm:p-6 sm:mx-4 sm:px-4 gap-y-4 flex flex-col'>
            <div className='flex mt-3'>
                <label htmlFor="" className='bg-[#20202A] p-3'><img src={user} alt="" /></label>
                <input type="text" placeholder='Name' className='bg-[#242430] w-full text-sm pl-2 outline-none'/>
            </div>
            <div className='flex'>
                <label htmlFor="" className='bg-[#20202A] p-3'><img src={email} alt="" /></label>
                <input type="email" placeholder='Email' className='bg-[#242430] w-full text-sm pl-2 outline-none'/>
            </div>
            <div className='flex'>
                <label htmlFor="" className='bg-[#20202A] p-3'><img src={message} alt="" /></label>
                
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='bg-[#242430] w-full text-sm pl-2 pt-3 outline-none'></textarea>
            </div>

            <button className='bg-[#FFC107] text-black p-2 sm:w-2/6 lg:w-2/6 xl:w-1/6 uppercase mb-5 mt-3'>Send Message</button>
        </form>
    )
}