import React, { useRef, useEffect } from "react";
import Specialize from "../assets/specialization.jpg";
import android from "../assets/android.png";

import flutter from "../assets/flutter.png";
import ios from "../assets/ios.png";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";
import pwa from "../assets/pwa.png";
import react from "../assets/react.png";
import swift from "../assets/swift.png";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Specialization = () => {
  const sectionRef = useRef(null);
  

    useEffect(() => {
    const el = sectionRef.current;

    // Background + content fade
    gsap.fromTo(
      el,
      { backgroundColor: "#000000", opacity: 0, y: 50 },
      {
        backgroundColor: "white",
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate heading + paragraph
    gsap.fromTo(
      el.querySelector("h2"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      el.querySelectorAll("p"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );

    // Animate icons
    gsap.fromTo(
      el.querySelectorAll("img"),
      { scale: 0, opacity: 0, rotateY: -90 },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

    

    
const handleReadMore = ()=>{
    alert(" page is not ready , we are working on it ...☺️")
  }



  return (
    <div
    ref={sectionRef}
     className=" w-full min-h-screen px-20 py-10 flex">
      {/* left div */}
      <div className=" w-full text-center flex flex-col justify-evenly">
        {/* Content */}
        <div>
          <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-3">
            our Specialization
          </p>

          <h2 className="text-5xl pb-5 font-bold capitalize">
            the Technologies we use
          </h2>

          <p className=" text-[1.1rem] leading-8 ">
            We have expertise in various trending development technologies.
          </p>
        </div>

        {/* Technology Icons */}
        <div className=" flex flex-col gap-10 py-5">
          <div className="flex justify-evenly items-center py-5">
            <img src={android} alt="" />
            <img src={ios} alt="" />
            <img src={flutter} alt="" />
            <img src={react} alt="" />
          </div>

          <div className="flex justify-evenly items-center py-5">
             <img src={java} alt="" />
            <img src={swift} alt="" />
            <img src={kotlin} alt="" />
            <img src={pwa} alt="" />
          </div>


        </div>
      </div>

      {/* right div Image */}
      <div className=" w-full">
        <img src={Specialize} alt="" />
        <div className="bg-black w-full text-white text-[1.1rem] px-20 py-10">
          <p className="pb-2">Collaborating Innovation With Our Expertise To Build A Better Future For Global Business.</p>

        <div onClick={handleReadMore} className="w-full flex justify-end"><button className='border-none p-5 rounded bg-[#E1005B] cursor-pointer '>Read More </button></div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
