import { Drawer } from 'antd';
import React from 'react'
import {MdClose} from 'react-icons/md'

const RightDrawer = (props) => {
    const linksStyle = 'text-[#7B7B7F] no-underline hover:text-white uppercase text-sm font-bold'
  return (
    <Drawer  open={props.open} onClose={props.onClose} placement='right' closeIcon={<MdClose color='black' className='fill-[#868688] ' size='1.4rem'/>} width='18rem' headerStyle={{background:'#2B2B34'}} 
      bodyStyle={{background:'#2B2B34'}}
      rootStyle={{paddingTop:'.7rem'}}
      >

        <div className='flex flex-col gap-y-5'>
        <a href="#/" className='text-[#7B7B7F] no-underline hover:text-white uppercase text-sm font-bold' onClick={props.onClose}>Home</a>
        <a href='#/portifolio' className={linksStyle} onClick={props.onClose}>Portifolio</a>
        <a href="#/" className={linksStyle} onClick={props.onClose}>About</a>
        <a href="#/" className={linksStyle} onClick={props.onClose}>Contact</a>
        <a href="#/" className={linksStyle} onClick={props.onClose}>Download CV</a>
        <a href="#/" className={linksStyle} onClick={props.onClose}>Hire Me</a>
        </div>

      </Drawer>
  )
}

export default RightDrawer