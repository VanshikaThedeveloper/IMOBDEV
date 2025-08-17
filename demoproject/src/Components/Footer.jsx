import React from "react";
import logo from "../assets/logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white  px-20 py-10 flex flex-col gap-5">
      {/* social Media handle */}
      <div className="flex w-full justify-between items-center">
        <div className="flex  gap-4 flex-col">
          <img src={logo} alt="" className="w-[150px]" />
          <p>
            The team of A Top-notch Development Company at your service since
            2009…
          </p>
        </div>

        <div className="flex gap-4  ">
          <div className="p-3 rounded-full bg-white text-black text-2xl">
            <FaFacebookF />
          </div>

          <div className="p-3 rounded-full bg-white text-black text-2xl">
            <FaYoutube />
          </div>

          <div className="p-3 rounded-full bg-white text-black text-2xl">
            <RiInstagramFill />
          </div>

          <div className="p-3 rounded-full bg-white text-black text-2xl">
            <FaLinkedinIn />
          </div>

          <div className="p-3 rounded-full bg-white text-black text-2xl">
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="text-white flex justify-between border border-gray-800">
        {/* Quick Links */}
        <div className=" w-[40%] p-10 border-r border-gray-800">
          <h2 className=" font-extrabold text-4xl">Quick Links</h2>
          <ul className="flex flex-col gap-2 mt-2">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


         {/* Services */}
        <div className=" w-[60%] p-10">
          <h2 className="font-extrabold text-4xl">Services</h2>   
          <div className="flex  gap-30">
            <div className="">
              <ul className="flex flex-col gap-2 mt-2">
                <li>Mobile Apps</li>
                <li>Web</li>
                <li>Software</li>
                <li>eCommerce</li>
                <li>Game</li>
                <li>Salesforce</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
            <div>
               <ul className="flex flex-col gap-2 mt-2">
                <li>Blockchain</li>
                <li>Android</li>
                <li>iPhone</li>
                <li>Hybrid</li>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>IoT</li>
              </ul>
            </div>
            <div>
               <ul className="flex flex-col gap-2 mt-2">
                <li>Swift</li>
                <li>PHP</li>
                <li>Software</li>
                <li>Laravel</li>
                <li>WordPress</li>
                <li>React Native</li>
                <li> NodeJS</li>
              </ul>
            </div>

          </div>
        </div>

      </div>


      {/* Copyright */}
        <div className="text-white w-full text-center ">
          Copyright © 2023 <span className="text-[#E1005B]">imobdevtech</span> . All rights reserved.
        </div>
    </div>
  );
};

export default Footer;

