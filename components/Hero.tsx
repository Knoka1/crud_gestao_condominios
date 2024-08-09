import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Visualize, gerencie ou acompanhe seus condomínios - rápido e fácil!
        </h1>
        <p className="hero__subtitle">
          Facilite a sua experiência de gestão de suas propriedades, sem esforço
        </p>
        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
