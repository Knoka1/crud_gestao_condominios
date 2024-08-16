"use client";
import PropertyForm from "@/components/PropertyFrom";
import { postProperty } from "@/lib/api/postProperty";
import { useRouter } from "next/navigation";
import React from "react";

const CreateProperty = () => {
  const router = useRouter();
  const handleAddNewProperty = async (property: Property) => {
    console.log(property);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // try {
    //   const response = await postProperty(property);
    //   if (!response) {
    //     setError("Erro ao enviar os dados. Tente novamente.");
    //   } else {
    //     // Handle success (e.g., show a success message or redirect)
    //     console.log("Propriedade criada com sucesso!", response);
    //   }
    // } catch (err) {
    //   setError("Erro ao enviar os dados. Tente novamente.");
    // }
    router.push("/property/all");
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-4xl font-extrabold">Criar Condomínio</h1>
      <p className="my-2 mb-4">Adicione um novo Condomínio</p>
      <PropertyForm type="new" onSubmit={handleAddNewProperty} />
    </section>
  );
};

export default CreateProperty;
