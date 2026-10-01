"use client";

import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const HeroSection = ({}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-5 pt-28 sm:pt-32 pb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Black and white professional headshot of Robert German"
          className="rounded-full w-36 sm:w-40"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl sm:text-2xl font-ovo"
      >
        Hi! I&apos;m Robert German
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.15] font-ovo"
      >
        software developer based in Bucharest, Romania.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-ovo text-gray-700 dark:text-white/85"
      >
        I build secure web and mobile applications with React, Next.js, React
        Native, and Capacitor.         I&apos;m actively exploring and using agentic
        AI in my day-to-day development to stay more productive, move faster,
        and ship better software.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 sm:mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-outfit dark:bg-transparent"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/CV_Robert_German.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-outfit bg-white dark:text-black"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
