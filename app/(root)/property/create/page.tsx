"use client";
import ProprietyFrom from "@/components/ProprietyFrom";
import { Button } from "@/components/ui/button";
import { postProperty } from "@/lib/api/postProperty";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const dummyProperty: Property = {
  id: 123,
  nome: "Dummy123",
  endereco: "Rua Dummy123",
  cnpj: "123.123.123-12",
  quantidadeUnidades: 123,
  inicioAdministracao: new Date("2024-08-09").toISOString(),
};

const CreateProperty = () => {
  const handleAddNewProperty = async (property: Property) => {
    const response = await postProperty(property);
    console.log(response);
    return response;
  };
  return (
    <section className="">
      <h1 className="text-4xl font-extrabold">Criar Condomínio</h1>
      <p className="mt-2">Adicione um novo Condomínio</p>
      <ProprietyFrom type="new" />
      <Button
        className="rounded-md bg-cyan-600"
        onClick={() => handleAddNewProperty}
      >
        <p className="pr-1">Adicionar</p>
        <IoIosAddCircleOutline size={20} />
      </Button>
    </section>
  );
};

export default CreateProperty;
