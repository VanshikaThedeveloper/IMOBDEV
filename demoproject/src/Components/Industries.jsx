import React, { useRef, useEffect, useState } from "react";
import cardimg6 from "../assets/cardimg6.jpg";
import cardimg2 from "../assets/cardimg2.jpg";
import cardimg3 from "../assets/cardimg3.jpg";
import cardimg5 from "../assets/cardimg5.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "./Overlay";
gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
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

  // Cards data (image + title + para)
  const cards = [
    {
      img: cardimg6,
      title: "Food & Restaurant",
      para: "Exclusive Food & Restaurant Management Solutions",
    },
    {
      img: cardimg2,
      title: "Facilities Management",
      para: "Operational facilitied Management Solution",
    },
    {
      img: cardimg3,
      title: "Insurance",
      para: "Scalable Insurance Management Solutions",
    },
    {
      img: cardimg5,
      title: "Logistics",
      para: "Operational Logistics Solutions",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full relative bg-black min-h-screen px-20 py-10 flex flex-col"
    >
      {/* Overlay */}
      <Overlay
        show={hoveredCard !== null}
        title={hoveredCard?.title}
        para={hoveredCard?.para}
      />

      {/* content */}
      <div className="text-white w-full flex justify-between relative z-50">
        <div>
          <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-3">
            Industries
          </p>
          <h2 className="text-5xl pb-5 font-bold capitalize">
            Industries We Serve
          </h2>
        </div>
        <div>
          <p className=" text-[1.1rem] leading-8 ">
            We Take Pride in Serving Clients Belonging to Various Industries.
          </p>

          
        </div>
      </div>

      {/* cards */}
      <div className="py-10 w-full px-5 flex justify-evenly relative z-50">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded hover:scale-110 mt-10 overflow-hidden bg-amber-600 w-[300px] h-full cursor-pointer"
            onMouseEnter={() => setHoveredCard(card)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={card.img} alt={card.title} className="rounded w-full " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
