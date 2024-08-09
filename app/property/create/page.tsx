"use client";
import { postProperty } from "@/lib/api/postProperty";
import React from "react";

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
    <div>
      <h4>Adicionar uma nova propriedade</h4>
      <button onClick={() => handleAddNewProperty(dummyProperty)}>
        Adicionar
      </button>
    </div>
  );
};

export default CreateProperty;
