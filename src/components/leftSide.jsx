import React from 'react'
import profile from '../Resources/profile.jpg'
import linkedin from '../Resources/LinkedIn.png'
import web from '../Resources/Geography.png'
import github from '../Resources/GitHub.png'
import twitter from '../Resources/Twitter.png'
import { Progress } from 'antd';
import {GoCheck} from 'react-icons/go'
import {MdOutlineFileDownload} from 'react-icons/md'
import './all.css'

const LeftSide = () => {
  const percent = [
    {percent:100,
  language:'Kinyarwanda'},{percent:90,
    language:'English'},
    {percent:70,
      language:'French'}
]

const sites = [linkedin,web,github,twitter]
const skills = [{language:'Nodejs',percent: 90},{language:'ReactJs',percent: 95},{language:'MongoDB',percent: 70},{language:'Postgresql',percent: 75},{language:'REST API',percent: 100},{language:'Jquery',percent: 50},{language:'Tailwindcss',percent: 95},{language:'Bootstrap',percent: 60}]
const coding = [{language:'html',percent: 90},{language:'css',percent: 80},{language:'Javascript',percent: 80},{language:'Python',percent: 70},{language:'Java',percent: 60},{language:'C',percent: 65}]
  return (
    <div className=' h-full bg-[#20202A] w-full flex flex-col'>
      <div className='bg-[#242430] text-[#868688] flex flex-col items-center justify-center py-4 h-30'>
            <img src={profile} alt="" width="1200" className='rounded-full h-[5rem] w-[5rem]'/>
            <h1 className='text-white text-lg font-bold'>Karera Olivier</h1>
            <p className='text-[#868688]'>Full-Stack Developer </p>
            <p className='text-[#868688]'>UI/UX Designer</p>
        </div>
        
        <div className='overflow-y-auto no-scrollbar w-full h-96 pb-14'>

        <section className='flex flex-col gap-y-1 mt-1'>
                <p className='flex justify-between mx-3'>Residence <span className='text-[#868688]' >Rwanda</span></p>
            <p className='flex justify-between mx-3'>City <span className='text-[#868688]'>Kigali</span></p>
            <p className='flex justify-between mx-3'>Age <span className='text-[#868688]'>22</span></p>
            </section>
            <div>
            <hr className='mx-3'/>
        <section>
                <h1 className='text-xl ml-3'>Languages</h1>
                <div className='flex justify-between text-sm' >
                  {percent.map(value =>{
                    let div1 = <div className='flex flex-col items-center flex-1'>
                    <Progress type='circle' percent={value.percent} strokeColor={{'0%':'#FFC107','100%':'#FFC107'}} width={50} format={() => <div style={{ color: '#BFBFC3' }}>{value.percent}%</div>}/>
                  <p>{value.language}</p>
                    </div>
                    return div1
                  } )}
           
                </div>
          </section>
        </div>
        <div>
        <hr className='mx-3'/>
        <h1 className='text-xl ml-3 '>Coding</h1>
        
          {coding.map((value)=>{
            return(
              <div className='px-4 flex flex-col relative'>
                <p className='flex justify-between text-xs  '>{value.language} <span>{value.percent}%</span></p>
        <progress className='progress w-4/5 absolute top-5 ' value={value.percent} max={100} ></progress>
        </div>
            )
          })}
        
        </div>
        <div>
        <hr className='mx-3'/>
        <h1 className='text-xl ml-3 '>Skills</h1>
        
          {skills.map((value)=>{
            return(
              <div className='px-4 flex gap-x-2'>
                <span><GoCheck style={{fill:'#FFC107'}}/></span>
                <p className='flex justify-between text-xs text-[#818184] '>{value.language} </p>
  
        </div>
            )
          })}
        
        </div>
        <div>
        <hr className='mx-3'/>
        <div className='flex items-center  mx-3 '>
          <button className=' flex gap-x-2 uppercase text-[#818184] text-sm font-bold'>Download CV <span className='mb-3'><MdOutlineFileDownload color='#818184' style={{fill: '#818184'}}/></span></button>
        </div>
        </div>
        </div>
        
        <footer className='flex justify-between gap-x-2 px-16 bg-[#24242E] py-3 h-12 fixed bottom-2 w-[16.4rem]'>
          {sites.map(value =>{
            return <img src={value} alt='' className='h-5'/>
          })}
            
        </footer>
   
    </div>
  )
}

export default LeftSide