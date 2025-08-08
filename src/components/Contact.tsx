import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 font-ovo relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-[length:90%-auto] z-0"
        style={{
          backgroundImage: `url("/footer-bg-color.png")`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div className="relative z-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
        <h2 className="text-center text-4xl sm:text-5xl font-ovo">
          Get in touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Have an idea, question, or project in mind? I’d love to hear from
          you—drop me a message and let’s make it happen.
        </p>

        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white"
              name="email"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Type in your idea..."
            required
            className="w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6"
            name="message"
          />
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500 cursor-pointer"
          >
            Send{" "}
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
