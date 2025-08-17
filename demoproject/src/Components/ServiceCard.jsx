import React from 'react'

const ServiceCard = ({title , content,id}) => {
  const handleReadMore = ()=>{
    alert(" page is not ready , we are working on it ...☺️")
  }
  return (
    <div className='bg-black w-[500px] rounded-2xl h-[500px] text-[1.1rem] flex items-center  flex-col justify-between text-white p-10'>

      <div key={id} className=''>
        <h1 className='pb-10'>{title}</h1>

         <p>{content}</p>
      </div>
      

      <button onClick={handleReadMore} className='border-none p-5 rounded bg-[#E1005B] cursor-pointer place-self-end'>Read More </button>
      
    </div>
  )
}

export default ServiceCard
