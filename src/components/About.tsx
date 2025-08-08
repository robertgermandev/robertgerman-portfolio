"use client";

import React from "react";
import Image from "next/image";
import { infoList, toolsData } from "../../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-12 my-20 max-w-full lg:max-w-5xl">
        <div className="flex-1 min-w-0">
          <p className="mb-10 max-w-full sm:w-full font-ovo">
            Software Developer with around 4 years of experience, specialized in
            React and Next.js, with knowledge of Node.js and extensive work with
            React Native. Passionate about teamwork, clear communication, and
            building supportive, collaborative environments where
            knowledge-sharing is key to success.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full font-ovo">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "sm:col-span-2" : ""
                } border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black`}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 sm:w-7 h-auto mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex flex-wrap gap-4 sm:justify-between">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={tool} alt="tool" className="w-4 sm:w-7 h-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
