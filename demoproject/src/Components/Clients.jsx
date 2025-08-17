import React from "react";
import clientImg from '../assets/client-img.jpg'
import ClientScroller from "./ClientsBadge";
const Clients = () => {
  return (

    <>
    <div className="min-h-[315px] px-20 flex  justify-between gap-25">
      <div className=" px-8 pb-10  flex flex-col justify-end">
          <p className="uppercase cursor-pointer text-[#E1005B] font-semibold pb-3">
            Meet Our Clients
          </p>
          <h2 className="text-5xl pb-5 font-bold capitalize">
            Your satisfaction is our ultimate achievement.
          </h2>

          <p>Serving global startups to enterprise-level businesses with top-notch custom development solutions since 2009!!! Reach out to our team of experts to be one of them.</p>
        </div>

        <img src={clientImg} alt="" className=" w-[315px] h-[315px]" />
    </div>

    <ClientScroller/>
    </>
    
  );
};

export default Clients;
