import React from "react";
import CustomButton from "../UiCustom/CustomButton";
import { CiCalendarDate } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import Image from "next/image";
import logo from "@/public/propertyLogo.png";
import Link from "next/link";
import { FaRegBuilding } from "react-icons/fa";
interface IAltPropertyCardProps {
  property: Property;
}
const AltPropertyCard = ({ property }: IAltPropertyCardProps) => {
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
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt="Property image"
          src={logo}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-400">
          <div className="flex flex-col justify-center items-center gap-2">
            <RiCommunityLine color="#0891b2" />
            <p className="text-[14px]">
              {quantidadeUnidades}
              <span> Unidade(s)</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FaRegBuilding color="#0891b2" />
            <p className="text-[14px]">{cnpj}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <CiCalendarDate color="#0891b2" />
            <p className="text-[14px]">
              {new Date(inicioAdministracao).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="alt-property-card__btn-container">
          <CustomButton
            title="Ver Mais"
            className="py-[16px] rounded-full bg-cyan-500"
            textStyles="text-white"
            rightIcon={true}
          />
          <CustomButton
            title="Ver Mais"
            className="py-[16px] rounded-full bg-cyan-500"
            textStyles="text-white"
            rightIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AltPropertyCard;
