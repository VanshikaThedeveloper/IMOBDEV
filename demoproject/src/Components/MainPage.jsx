"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/main-img1.png";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // start when text enters viewport
        toggleActions: "play none none reverse",
      },
    });

    // Text from left
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );

    // Image from right
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" },
      "-=0.8" // overlap with text animation
    );
  }, []);

  return (
    <div className="w-full pt-16 min-h-screen flex items-center justify-center px-20 gap-10 overflow-hidden">
      {/* Text Section */}
      <div ref={textRef}>
        <h1 className="font-bold text-5xl px-10 py-5 text-start">
          Innovative Business Ideas Turned Into State-of-the-art Mobile Applications
        </h1>
        <p className="px-8 w-[85%] leading-8 text-[#565656] text-[1.1rem]">
          iMOBDEV Technologies specializes in creating web-based and mobile applications
          for startups and global businesses. We create exceptional web and mobile apps
          to provide a delightful digital experience, whether you have a refined project
          or a new app idea.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full" ref={imageRef}>
        <img src={image} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainPage;
