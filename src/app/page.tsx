"use client";

import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
