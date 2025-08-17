"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/about.jpg";
import client from "../assets/client-icn.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // start animation when 80% in viewport
        toggleActions: "play none none reverse",
      },
    });

    const el = sectionRef.current;

    // Fade background from black + fade in text
    gsap.fromTo(
      el,
      { backgroundColor: "#000000", opacity: 0, y: 50 },
      {
        backgroundColor: "#191919",
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%", // when 80% of section is visible
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text animation
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.4" // overlap with background animation
    );

    // Image animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 80, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.5" // overlap with text
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#191919] w-full min-h-screen px-20 overflow-hidden"
    >
      <div className="flex w-full items-end">
        {/* Text Content */}
        <div ref={textRef} className="w-[40%] px-8 pb-25">
          <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-3">
            about us
          </p>
          <h2 className="text-5xl text-white font-bold capitalize">
            Innovation unites us as one team with a passion
          </h2>
        </div>

        {/* Image + Paragraph */}
        <div className="w-[60%]">
          <img ref={imageRef} src={about} alt="" />
          <p className="text-white text-[1.1rem] leading-8 pr-10 py-5">
            At iMOBDEV Technologies, our mission goes beyond designing, and
            developing. We are a group of enthusiastic individuals who share a
            common goal: to create creative solutions and provide exceptional
            outcomes.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex gap-2 justify-between mt-10">
        <div className="grid grid-cols-3 w-full text-white gap-2">
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold">14+</h1>
            <p className="text-[1.1rem]">Years Of Experience</p>
          </div>
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold ">1000+</h1>
            <p className="text-[1.1rem]">World Wide Clients</p>
          </div>
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold">1200+</h1>
            <p className="text-[1.1rem]">Apps Developed</p>
          </div>
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold">800+</h1>
            <p className="text-[1.1rem]">Websites Designed</p>
          </div>
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold">75+</h1>
            <p className="text-[1.1rem]">Games Developed</p>
          </div>
          <div className="p-5 hover:scale-125 transition duration-500 ease-in-out ">
            <h1 className="text-5xl font-bold">100+</h1>
            <p className="text-[1.1rem]">Latest Tech Solutions</p>
          </div>
        </div>

        {/* Client Icon */}
        <div className="bg-[#E1005B] py-2 px-20 flex flex-col items-center justify-center">
          <img src={client} alt="" className="" />
          <div className="p-5 text-white">
            <h1 className="text-5xl font-bold">500+</h1>
            <p className="text-[1.1rem] text-nowrap">Team Strength</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
