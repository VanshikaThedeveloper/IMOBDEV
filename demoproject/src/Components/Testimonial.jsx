import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Book from "./Book";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {

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
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);



  return (
    <div
    ref={sectionRef}
     className='w-full relative bg-black min-h-screen px-20 py-10 flex flex-col'>


      <div className=" flex flex-col items-center justify-center">
         <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-2">
            Testimonial
          </p>
          <h2 className="text-5xl  text-white pb-2 font-bold capitalize">
            Client Speaks
          </h2>


           <p className=" text-white text-[1.1rem] leading-8 ">
            Endorsed by professionals worldwide Awards
          </p>
      </div>
      <div>
        <Book/>
      </div>
      
    </div>
  )
}

export default Testimonial
