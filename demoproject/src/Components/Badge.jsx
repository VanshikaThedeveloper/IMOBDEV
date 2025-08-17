import React from 'react'
import arrow from '../assets/big-arrow.svg'
import image2 from '../assets/image2.jpg'

const Badge = () => {
  const handleQuote = ()=>{
    alert("working on this feature ....☺️ ")
  }
  return (
  
       <div className=' w-full flex items-end justify-between'>
        <div className='  bg-[#E1005B] px-15 py-13 font-sarif  text-white text-xl'>
          <p onClick={handleQuote} className='cursor-pointer'>Need a Quote</p>
          <img src={arrow} alt="" className='w-[150px]'/>
        </div>

  
          <img src={image2} alt="" className='' />
        
       </div>
      
    
  )
}

export default Badge
