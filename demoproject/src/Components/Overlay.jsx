import React from 'react'

const Overlay = ({show,title,para}) => {
  return (
    <div className={` flex  transition duration-500 items-center justify-center absolute top-0 left-0 z-80 w-full h-screen
     ${show ? `bg-black opacity-80 pointer-events-none ` : `bg-none pointer-events-none`}`}>

    {
      show && 
      <div className=''>
        <h1 className=' z-100 text-white text-7xl font-bold pb-5'>{title}</h1>
        <p className=' text-white text-[1.3rem] text-center '>{para}</p>
      </div>
    }
      
      
    </div>
  )
}

export default Overlay



// Overlay.jsx
// import React from "react";

// const Overlay = ({ show }) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-black transition-opacity  z-40 ${
//         show ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"
//       }`}
//     ></div>
//   );
// };

// export default Overlay;
