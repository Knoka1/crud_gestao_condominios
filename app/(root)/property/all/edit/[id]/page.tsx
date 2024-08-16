"use client";
import React, { useEffect, useState } from "react";
import { fetchPropertyById } from "@/lib/api/fetchPropertyById";
import { deletePropertyById } from "@/lib/api/deletePropertyById";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import PropertyForm from "@/components/PropertyForm";
import { putPropertyById } from "@/lib/api/putPropetyById";
import WarningAlert from "@/components/Alerts/WarningAlert";

interface IPropertyPageProps {
  params: { id: string };
}

const PropertyPage = ({ params }: IPropertyPageProps) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProperty = async () => {
      const id = params?.id;
      try {
        let fetchedProperty = await fetchPropertyById(Number(id));
        if (fetchedProperty === null) {
          setError("Condomínio não encontrado.");
        } else {
          fetchedProperty["inicioAdministracao"] = fetchedProperty[
            "inicioAdministracao"
          ].slice(0, 10);
          setProperty(fetchedProperty);
        }
      } catch (error) {
        setError(
          "Ocorreu um erro ao tentar buscar esse condomínio. Por favor, tente mais tarde"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);
  const handleDelete = async () => {
    await deletePropertyById(Number(params.id));
  };
  const handleEditProperty = async (property: Property) => {
    property.id = Number(params.id);
    try {
      const response = await putPropertyById(Number(params.id), property);
      if (response === null) {
        return toast({
          variant: "destructive",
          title: "Não foi possível editar o condomínio",
          description: `Por favor, tente novamente.`,
        });
      } else {
        router.push("/property/all");
        return toast({
          title: "Condomínio editado com sucesso",
          description: `O condomínio ${property.nome} foi editado.`,
        });
      }
    } catch (err) {
      console.log("Erro ao enviar os dados. Erro:", err);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <section className="flex flex-col">
      <h1 className="text-4xl font-extrabold">Editar Condomínio</h1>
      <p className="my-2 mb-4">Altualize as informações do Condomínio</p>
      <PropertyForm
        type="edit"
        onSubmit={handleEditProperty}
        defaultValues={property}
      />
      <div className="flex mt-6">
        <WarningAlert handleDelete={handleDelete} />
      </div>
    </section>
  );
};

export default PropertyPage;
