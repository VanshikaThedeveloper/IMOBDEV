import { FaCaretDown } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    gsap.to(navbar, {
      backgroundColor: "#C5C4ED",
      height: "80px",
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });
  }, []);

  const handleRequest = () => {
    alert("We are working on this request handle");
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div
      ref={navbarRef}
      className="w-full h-16 bg-gray-200 items-center flex justify-between fixed top-0 left-0 z-50 pl-6"
    >
      {/* Logo */}
      <img src={logo} alt="pic" className="w-[150px]" />

      {/* Menu */}
      <ul className="flex space-x-6 list-none relative">
        {/* Company */}
        <li
          className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out flex items-center gap-1 relative"
          onClick={() => toggleDropdown("company")}
        >
          company <FaCaretDown />
          {openDropdown === "company" && (
            <ul className="absolute top-full mt-2 left-0 bg-gray-50  shadow-lg rounded-lg w-48 py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Careers</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Team</li>
            </ul>
          )}
        </li>

        {/* Services */}
        <li
          className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out flex items-center gap-1 relative"
          onClick={() => toggleDropdown("services")}
        >
          services <FaCaretDown />
          {openDropdown === "services" && (
            <ul className="absolute top-full mt-2 left-0  shadow-lg rounded-lg w-56 py-2 z-50 bg-gray-50 ">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mobile App Development</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UI/UX Design</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cloud Solutions</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">QA & Testing</li>
            </ul>
          )}
        </li>

        {/* Hire Developers */}
        <li
          className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out flex items-center gap-1 relative"
          onClick={() => toggleDropdown("hire")}
        >
          hire developers <FaCaretDown />
          {openDropdown === "hire" && (
            <ul className="absolute top-full mt-2 left-0 bg-gray-50 shadow-lg rounded-lg w-56 py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hire React Developers</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hire Node.js Developers</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hire Flutter Developers</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hire Full-Stack Developers</li>
            </ul>
          )}
        </li>

        {/* Portfolio */}
        <li className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out">
          portfolio
        </li>

        {/* Blog */}
        <li className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out">
          blog
        </li>

        {/* Contact Us */}
        <li className="uppercase cursor-pointer hover:text-[#E1005B] transition duration-300 ease-in-out">
          contact us
        </li>
      </ul>

      {/* Button */}
      <div
        onClick={handleRequest}
        className="uppercase bg-[#E1005B] h-full px-4 flex items-center justify-center font-semibold cursor-pointer text-white rounded-md"
      >
        request quote
      </div>
    </div>
  );
};

export default Navbar;
