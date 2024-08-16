"use client";
import PropertyForm from "@/components/PropertyForm";
import { postProperty } from "@/lib/api/postProperty";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import React from "react";

const CreateProperty = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddNewProperty = async (property: Property) => {
    try {
      const response = await postProperty(property);
      if (response === null) {
        return toast({
          variant: "destructive",
          title: "Não foi possível inserir o condomínio",
          description: `Por favor, tente novamente.`,
        });
      } else {
        router.push("/property/all");
        return toast({
          title: "Condomínio inserido com sucesso",
          description: `O condomínio ${property.nome} foi inserido.`,
        });
      }
    } catch (err) {
      console.log("Erro ao enviar os dados. Erro:", err);
    }
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
