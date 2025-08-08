import React from "react";
import { serviceData } from "../../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Services</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-ovo">
        What I offer
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I create responsive, user-friendly websites that deliver seamless and
        engaging experiences across all devices.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10 font-ovo">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-8 hover:bg-lightHover hover:shadow-black cursor hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
