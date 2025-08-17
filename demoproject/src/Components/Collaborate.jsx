import React from 'react'
import collab1 from '../assets/collab1.jpg'
import collab2 from '../assets/collab2.jpg'
import collab3 from '../assets/collab3.jpg'

const Collaborate = () => {

  
  return (
    <div className=' min-h-screen w-full'>
      <div className=' text-center pt-20 flex flex-col items-center justify-center'>
         <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-2">
            Ways to Collaborate
          </p>
          <h2 className="text-5xl pb-2 font-bold capitalize">
            Partnership Model
          </h2>

           <p className=" text-[1.1rem] leading-8 w-[700px]  p-2">
            At iMOBDEV Technologies, we offer three distinct partnership models tailored to meet the specific needs of our clients.
          </p>
      </div>

{/* Collab 1 */}
      <div className='flex pt-20 border-b-3 border-gray-100 '>
        <div className='p-20'>
          <h1 className='text-4xl font-bold'>
            Fixed Price Model
          </h1>

          <p className='text-[1.1rem] text-gray-500 leading-8'>The Fixed Prices Model allows clients to pay a fixed price for a project, regardless of the actual time and resources utilized. We aim to provide our clients with customized solutions that meet their individual requirements, ensuring their success and satisfaction.</p>
        </div>
        <div className='w-full'>
          <img src={collab1} alt="" />
        </div>
      </div>


{/* collab 2 */}
      <div className='flex border-b-3 border-gray-100 '>
        <div className='w-full'>
          <img src={collab2} alt="" />
        </div>
        <div className='p-20'>
          <h1 className='text-4xl font-bold'>
            Hire Dedicated Model
          </h1>

          <p className='text-[1.1rem] text-gray-500 leading-8'>The Hire Dedicated Model provides clients with the flexibility to hire a dedicated team of developers who work exclusively on their projects. This model is ideal for clients who require long-term support or have large-scale projects.</p>
        </div>
        
      </div>

      {/* collab 3 */}

      <div className='flex   '>
        <div className='p-20'>
          <h1 className='text-4xl font-bold'>
            On-site Development Model
          </h1>

          <p className='text-[1.1rem] text-gray-500 leading-8'>The On-Site Development Model involves our team working directly at the client's location, providing real-time development. This model is suitable for clients who require on-site support and prefer to have the development team on-premises.</p>
        </div>
        <div className='w-full'>
          <img src={collab3} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Collaborate
