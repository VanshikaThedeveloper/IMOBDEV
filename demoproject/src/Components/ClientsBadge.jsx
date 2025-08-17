"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Dummy client logos (replace with your images)
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

const logos = [client1, client2, client3, client4, client5];

const ClientScroller = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;

    // Clone logos to make infinite loop
    const logos = el.querySelector(".logos");
    const clone = logos.cloneNode(true);
    el.appendChild(clone);

    gsap.to(el.children, {
      xPercent: -100,
      repeat: -1,
      duration: 8, // speed (lower = faster)
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full mt-10 overflow-hidden bg-gray-50 py-8">
      

      <div
        ref={scrollerRef}
        className="relative flex w-full overflow-hidden whitespace-nowrap"
      >
        <div className="logos flex gap-12 px-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[150px] h-[80px] bg-white rounded-xl shadow-md"
            >
              <img
                src={logo}
                alt={`client-${i}`}
                className="max-h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientScroller;
