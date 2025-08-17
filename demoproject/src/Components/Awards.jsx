import React from 'react'
import award1 from '../assets/award1.png';
import award2 from '../assets/award2.png';
import award3 from '../assets/award3.png';
import award4 from '../assets/award4.png';
import award5 from '../assets/award5.png';
import award6 from '../assets/award6.png';


const Awards = () => {
  return (
    <div className='w-full bg-white  px-20 py-10 flex flex-col '>
      <div className='grid grid-cols-4   py-7'>
        <div className='flex flex-col justify-center col-span-2 items-center '>
          <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-2">
            Awards
          </p>
          <h2 className="text-5xl pb-2 font-bold capitalize">
            Awards & Recognition
          </h2>
          <p className=" text-[1.1rem] leading-8 ">
            Recognition We Have Got Throughout These Years
          </p>
        </div>
        <div className='m-auto'>
          <img src={award1} alt="" />
        </div>
        <div className='m-auto'>
          <img src={award2} alt="" />
        </div>
      </div>

      <div className='grid grid-cols-4   items-center py-7'>
        <div className='m-auto'>
          <img src={award3} alt="" />
        </div>
        <div className='m-auto'>
          <img src={award4} alt="" />
        </div>
        <div className='m-auto'>
          <img src={award5} alt="" />
        </div>
        <div className='m-auto'>
          <img src={award6} alt="" />
        </div>

      </div>
      
    </div>
  )
}

export default Awards
