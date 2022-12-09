import React from 'react'
import profile from '../Resources/profile.jpg'
import linkedin from '../Resources/LinkedIn.png'
import web from '../Resources/Geography.png'
import github from '../Resources/GitHub.png'
import twitter from '../Resources/Twitter.png'
import { Progress } from 'antd';

const LeftSide = () => {
  const percent = [
    {percent:100,
  language:'Kinyarwanda'},{percent:90,
    language:'English'},
    {percent:70,
      language:'French'}
]

const sites = [linkedin,web,github,twitter]
  return (
    <div className=' h-full bg-[#20202A] w-full flex flex-col'>
      <div className='bg-[#242430] text-[#868688] flex flex-col items-center justify-center py-4'>
            <img src={profile} alt="" width="1200" className='rounded-full h-[5rem] w-[5rem]'/>
            <h1 className='text-white text-lg font-bold'>Karera Olivier</h1>
            <p>Full-Stack Developer </p>
            <p>UI/UX Designer</p>
        </div>
        
        <div className='flex-1'>

        <section className='flex flex-col gap-y-1 mt-1'>
                <p className='flex justify-between mx-3'>Residence <span >Rwanda</span></p>
            <p className='flex justify-between mx-3'>City <span>Kigali</span></p>
            <p className='flex justify-between mx-3'>Age <span>22</span></p>
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
        </div>
        
        <div className='flex justify-between gap-x-2 px-16 bg-[#24242E] py-3 '>
          {sites.map(value =>{
            return <img src={value} alt='' className='h-5'/>
          })}
            
        </div>
   
    </div>
  )
}

export default LeftSide