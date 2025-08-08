import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const HeroSection = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Robert German{" "}
        <Image src={assets.hand_icon} alt="hand" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        frontend developer based in Alba Iulia, Romania.
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I develop seamless, scalable web and mobile applications using React,
        Next.js, and React Native, always striving for clean code, great UX, and
        a positive, collaborative team atmosphere.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-outfit"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4"
          />
        </a>
        <a
          href="/CV_Robert_German.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-outfit"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
