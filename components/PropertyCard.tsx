"use client";
import React, { useState } from "react";
import Image from "next/image";

interface IPropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: IPropertyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, nome, endereco, cnpj, quantidadeUnidades, inicioAdministracao } =
    property;
  return (
    <div className="property-card group">
      <div className="property-card__content">
        <h2 className="property-card__content-title">{nome}</h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">{endereco}</span>
      </p>
    </div>
  );
};

export default PropertyCard;
