import { Drawer } from 'antd';
import React, { useState } from 'react'
import LeftSide from './leftSide';
import profile from '../Resources/profile.jpg'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { MdClose } from 'react-icons/md';


const LeftDrawer = (props) => {

    
  return (
    <Drawer  open={props.open} onClose={props.onClose} placement='left' closeIcon={<MdClose color='black' className='fill-[#868688] ' size='1.4rem'/>} width='18rem' headerStyle={{background:'#2B2B34'}} 
    bodyStyle={{background:'#2B2B34',padding:'0'}}
    rootStyle={{paddingTop:'.7rem',paddingLeft:'-2px'}}
    
    >
        
        <LeftSide />
        
    </Drawer>
  )
}

export default LeftDrawer