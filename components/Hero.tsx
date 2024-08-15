"use client";
import React from "react";
import logo from "@/public/propertyLogo.png";
import Image from "next/image";
import CustomButton from "./UiCustom/CustomButton";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-10 md:pt-16 padding-x">
        <h1 className="hero__title">
          <span className="text-cyan-600">Visualize</span>,{" "}
          <span className="text-cyan-600">Gerencie</span> e{" "}
          <span className="text-cyan-600">Acompanhe</span> seus condomínios -
          Rápido e Fácil!
        </h1>
        <p className="hero__subtitle">
          Facilite a sua experiência de{" "}
          <span className="text-cyan-600">gestão</span> de suas propriedades,
          <span className="text-cyan-600"> sem esforço</span>.
        </p>
        <Link href={`property/all`}>
          <CustomButton
            title="Explorar Condomínios"
            className="bg-cyan-600 text-white rounded-full mt-10"
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={logo}
            alt="Hero house image"
            className="object-contain"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
            fill
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
