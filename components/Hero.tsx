"use client";
import React from "react";
import logo from "@/public/propertyLogo.png";
import Image from "next/image";
import CustomButton from "./UiCustom/CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title">
          Visualize, gerencie ou acompanhe seus condomínios - rápido e fácil!
        </h1>
        <p className="hero__subtitle">
          Facilite a sua experiência de gestão de suas propriedades, sem esforço
        </p>
        <CustomButton
          title="Explorar Condomínios"
          className="bg-cyan-600 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image-overlay" />

        <div className="hero__image">
          <Image
            src={logo}
            alt="Hero house image"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
