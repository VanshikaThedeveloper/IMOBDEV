import React, { useRef, useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoBagHandleSharp, IoHandLeft } from "react-icons/io5";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const handleCallClick = ()=>{
    alert("this facility is available very soon ...")
  }
  
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contact, setContact] = useState("+ 91 123 456 789");
  const [role,setRole] = useState("Developer");
  const [msg, setMsg] = useState("Write here ......");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("details are", { name, email, contact, role, msg });
    alert("Form submitted successfully!");
    
    // Handle form submission logic here
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

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
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full text-black min-h-screen px-20 py-10 flex"
    >
      <div className="flex  w-[40%]  flex-col items-center justify-center">
        <p className="uppercase text-[#E1005B] cursor-pointer font-semibold pb-3">
          Contact Us
        </p>
        <h2 className="text-5xl pb-5 font-bold capitalize">Contact Us</h2>
        <p className=" text-[1.1rem] leading-8 text-center px-20 ">
          Get in touch with our team to receive customized support.
        </p>

        <div className="mt-5 flex items-center justify-center flex-col gap-4 ">
          <div onClick={handleCallClick} className="p-5 rounded-full w-[80px] flex items-center justify-center h-[80px] text-4xl bg-[#E1005B] text-white">
            <IoIosCall />
          </div>
          <p> + 91 815 506 3838</p>
        </div>
        <div className="mt-5 flex items-center justify-center flex-col gap-4 ">
          <div onClick={handleCallClick} className="p-5 rounded-full w-[80px] flex items-center justify-center h-[80px] text-4xl bg-[#E1005B] text-white">
            <IoIosMail />
          </div>
          <p> Sales@imobdevtech.com</p>
        </div>
        <div className="mt-5 flex items-center justify-center flex-col gap-4 ">
          <div onClick={handleCallClick} className="p-5 rounded-full w-[80px] flex items-center justify-center h-[80px] text-4xl bg-[#E1005B] text-white">
            <IoBagHandleSharp />
          </div>
          <p>Sales.IMOBDEV</p>
        </div>
      </div>

      {/* Form  */}
      <div className="bg-gray-100 w-[60%] px-5 text-black py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold ">
            Please fill in the form below.
          </h1>
          <p className="text-gray-500">
            Fill in the necessary details to discuss your development ideas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 mt-10 px-2">
            <label htmlFor="name ">FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-b border-[#E1005B] p-2 text-gray-400"
            />
          </div>

          <div className="flex  gap-4 mt-10 px-2">
            <div className="flex flex-col gap-4  w-full px-2">
              <label htmlFor="name ">E-MAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-b border-[#E1005B] p-2 text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-4 w-full px-2">
              <label htmlFor="number">CONTACT NO.</label>
              <input
                type="text"
                id="number"
                name="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border-b border-[#E1005B] p-2 text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10 px-2">
            <label htmlFor="role " className="uppercase">interested in</label>
            <input
              type="text"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="border-b border-[#E1005B] p-2 text-gray-400"
            />
          </div>


           <div className="flex flex-col gap-4 mt-10 px-2">
            <label htmlFor="role " className="uppercase">MESSAGE</label>
            <textarea
              type="text"
              id="msg"
              name="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
              className="border-b border-[#E1005B] p-2 text-gray-400"
            ></textarea>
          </div>

          <button className="bg-[#E1005B] m-auto w-[300px] text-white py-4 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
