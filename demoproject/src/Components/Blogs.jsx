import React, { useRef, useEffect, useState } from "react";
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import arrow from '../assets/big-arrow.svg'



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const handleView = ()=>{
    alert("working on this feature .... ")
  }
  const cardContent = [
    {
      img: blog1,
      title: "Top Benefits of Cross-Platform App Development",
      description: "As a business owner, you must have come across...",
      date: "29-may-2023", 
      time: "5 min Read",
    
    },
    {
       img: blog2,
      title: "Top PHP Laravel framework features and benefits",
      description: "Laravel is one of the most popular PHP frameworks today ...",
      date: "23-march-2023",
      time: "5 min Read",

    },
    {
       img: blog3,
      title: "Top 5 Must-Have Features for Successful Mobile App in 2023",
      description: "Any mobile application user looks for an easy-to-use user interface ...",
      date: "29-february-2023", 
      time: "5 min Read",
    },
  ];

   const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { backgroundColor: "#000000", opacity: 0, y: 50 },
      {
        backgroundColor: "black",
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  return (
    <div
     ref={sectionRef}
    className='w-full bg-black text-white min-h-screen px-20 py-10 flex flex-col'>

      <div className="flex  flex-col items-center justify-center">
         <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-3">
            Blog
          </p>
          <h2 className="text-5xl pb-5 font-bold capitalize">
            latest insights
          </h2>
          <p className=" text-[1.1rem] leading-8 ">
            Explore our perspectives and analysis of the newest trends in technology and business.
          </p>
      </div>

      {/* cards */}
      <div className=" mt-20 flex items-center justify-evenly">
      {
        cardContent.map((elm,id)=>(
          <div key={id} className="w-[400px] relative h-[500px] cursor-pointer bg-yellow-300 overflow-hidden flex items-center justify-center ">
            <img src={elm.img} alt=""  className="w-full h-full "/>
            <div className="absolute flex flex-col justify-end gap-2 px-6 top-0 left-0   w-full h-full bg-gradient-to-b from-black/10 from-5% to-black to-100% ">
              <p className="z-50 text-2xl font-bold text-white">{elm.title}</p>
              <p>{elm.description}</p>
              <div className="w-full text-[#E1005B] flex justify-between">
                <p>{elm.date}</p>
                <p>{elm.time}</p>
              </div>
            </div>
          </div>

        ))
      }  
      </div>
      <p className="flex gap-2 cursor-pointer m-auto mt-10" onClick={handleView}>View All <img src={arrow} alt="" className="w-[50px] " /></p>

    </div>
  )
}

export default Blogs
