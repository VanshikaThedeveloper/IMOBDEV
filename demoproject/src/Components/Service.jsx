import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";

const services = [
  {
    id: 1,
    title: "01 Mobile Development",
    content:
      "Get tailor-made mobile applications from industry experts. We provide mobile app development services for both iOS and Android platforms, starting from conceptualization to deployment and maintenance.",
  },
  {
    id: 2,
    title: "02 Web Development",
    content:
      "iMOBDEV Technologies provides web app development services to businesses of all sizes. Our team of experienced developers uses the latest technologies and frameworks to create custom web apps that are user-friendly, scalable, and secure.",
  },
  {
    id: 3,
    title: "03 Software Development",
    content:
      "Make sure your business got a chance to get the best out of digital advancement. Get a comprehensive range of software development services that are designed to help businesses succeed in the rapidly evolving digital landscape.",
  },
  {
    id: 4,
    title: "04 ECommerce Development",
    content:
      "Get eCommerce services that enable businesses to expand their online presence, reach a wider audience, and increase their revenue. Our team of experts specializes in developing custom eCommerce solutions that cater to the unique needs of our clients.",
  },
  {
    id: 5,
    title: "05 Game Development",
    content:
      "Our team of experts has skills in developing games that are immersive, interactive, and engaging across multiple platforms. From 2D and 3D game development to VR and AR game development, we provide customized solutions that are tailored to our client's unique requirements.",
  },
  {
    id: 6,
    title: "06 Salesforce Development",
    content:
      "Our Salesforce developers have the experience and expertise to provide custom solutions that enhance business operations and improve customer engagement. We also offer Salesforce consulting services that enable businesses to optimize their Salesforce implementation for maximum ROI.",
  },
  {
    id: 7,
    title: "07 Artificial Intelligence",
    content:
      "At iMOBDEV Technologies, we offer a range of Artificial Intelligence (AI) services that enable businesses to leverage cutting-edge technology to improve their operations and drive growth. With our AI solutions, businesses can stay ahead of the competition and transform the way they operate.",
  },
  {
    id: 8,
    title: "08 Blockchain Development",
    content:
      "Get custom Blockchain development services not to just solve continuous business problems but to add substantial value to your business growth and explore new opportunities.",
  },
  {
    id: 9,
    title: "09 IoT Development",
    content:
      "Hire IoT developers from iMOBDEV Technologies to get end-to-end IoT development support and assistance starting from product conceptualization to post-deployment support and maintenance.",
  },
];

const Service = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [clickedRect, setClickedRect] = useState(null);
  const cardRef = useRef(null);

  // Animate when activeService changes
  useEffect(() => {
    if (cardRef.current && clickedRect) {
      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();

      // Calculate offset from clicked div to card position
      const dx = clickedRect.left - cardRect.left;
      const dy = clickedRect.top - cardRect.top;

      gsap.fromTo(
        card,
        { x: dx, y: dy, scale: 0.2, rotateY: -90, opacity: 0 },
        {
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [activeService, clickedRect]);

  const handleClick = (service, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickedRect(rect);
    setActiveService(service);
  };

  return (
    <div className="w-full min-h-screen px-20 flex flex-col gap-10">
      {/* Heading Section */}
      <div className="flex pt-10">
        <div className="w-full">
          <p className="uppercase text-[#E1005B] font-semibold cursor-pointer pb-3">
            Service we offer
          </p>
          <h2 className="text-5xl font-bold capitalize">Services We Offer</h2>
        </div>
        <div>
          <p className="leading-8 text-[#565656] text-[1.1rem]">
            Make your digital presence more worthwhile and fruitful by
            leveraging the development skills of the top-notch development
            company.
          </p>
        </div>
      </div>

      <div className="flex">
        {/* Service List */}
        <div className="bg-gray-300 w-[600px]">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={(e) => handleClick(service, e)}
              className={`px-10 text-[1.1rem] py-4 border-b border-gray-100 cursor-pointer transition duration-300 ease-linear ${
                activeService.id === service.id
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {service.title}
            </div>
          ))}
        </div>

        {/* Card Display */}
        <div className="w-full flex items-center px-10 justify-center perspective-[1200px]">
          <div ref={cardRef}>
            <ServiceCard
              id={activeService.id}
              title={activeService.title}
              content={activeService.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
