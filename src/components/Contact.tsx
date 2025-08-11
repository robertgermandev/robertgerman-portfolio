"use client";

import React, { useActionState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import {submitContactForm} from "@/app/actions/contact";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const [state, formAction, isPending] = useActionState(submitContactForm, {})

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 font-ovo relative overflow-hidden"
    >
      {!isDarkMode && (
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-[length:90%-auto]"
          style={{
            backgroundImage: `url("/footer-bg-color.png")`,
          }}
        ></div>
      )}
      {!isDarkMode && (
        <>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        </>
      )}
      <div className="relative z-20">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-ovo"
        >
          Connect with me
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-ovo"
        >
          Get in touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        >
          Have an idea, question, or project in mind? I’d love to hear from
          you—drop me a message and let’s make it happen.
        </motion.p>

        <motion.form
          action={formAction}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="name"
              disabled={isPending}
            />
            {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state?.errors.name[0]}</p>}
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              name="email"
              disabled={isPending}
            />
            {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state?.errors.email[0]}</p>}
          </div>
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            rows={6}
            placeholder="Type in your idea..."
            required
            className="w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="message"
            disabled={isPending}
          />
          {state?.errors?.message && <p className="text-red-500 text-xs">{state?.errors.message[0]}</p>}
          {state?.message && (
            <div
              className={`p-4 rounded-md text-ovo ${
                state?.success
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {state?.message}
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            disabled={isPending}
            className="py-3 mt-6 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500 cursor-pointer dark:bg-transparent dark:border-[.5px] dark:hover:bg-darkHover"
          >
            {isPending ? ('Se trimite...') : <>Send{" "}
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" /></>}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
