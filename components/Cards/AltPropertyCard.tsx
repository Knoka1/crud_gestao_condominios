import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import Image from "next/image";
import logo from "@/public/propertyLogo.png";
import Link from "next/link";
import { FaRegEdit, FaRegBuilding } from "react-icons/fa";
import { Button } from "../ui/button";
import WarningAlert from "../Alerts/WarningAlert";
import { formatDateUTC } from "@/lib/utils";

interface IAltPropertyCardProps {
  property: Property;
  onDelete: (id: number) => void;
}

const AltPropertyCard = ({ property, onDelete }: IAltPropertyCardProps) => {
  const { id, nome, endereco, cnpj, quantidadeUnidades, inicioAdministracao } =
    property;

  const handleDelete = () => {
    onDelete(Number(id));
  };

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
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
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
            <p className="text-[14px]">{formatDateUTC(inicioAdministracao)}</p>
          </div>
        </div>
        <div className="alt-property-card__btn-container">
          <Link href={`all/edit/${id}`}>
            <Button className="py-[16px] rounded-full bg-cyan-500">
              <FaRegEdit />
              <p className="pl-2">Editar</p>
            </Button>
          </Link>
          <WarningAlert handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default AltPropertyCard;
