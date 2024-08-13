"use client";
import React, { useEffect, useState } from "react";
import { fetchPropertyById } from "@/lib/api/fetchPropertyById";
import { deletePropertyById } from "@/lib/api/deletePropertyById";

interface IPropertyPageProps {
  params: { id: string };
}

const PropertyPage = ({ params }: IPropertyPageProps) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const id = params?.id;
      try {
        const fetchedProperty = await fetchPropertyById(id);
        if (fetchedProperty === null) {
          setError("Condomínio não encontrado.");
        } else {
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
  const handleDelete = async (id: number) => {
    await deletePropertyById(id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h1>{property.nome}</h1>
      <p>Address: {property.endereco}</p>
      <p>CNPJ: {property.cnpj}</p>
      <p>Units: {property.quantidadeUnidades}</p>
      <p>
        Start Date:{" "}
        {new Date(property.inicioAdministracao).toLocaleDateString()}
      </p>
      <button onClick={() => handleDelete(Number(params?.id))}>
        Delete Property
      </button>
    </div>
  );
};

export default PropertyPage;
