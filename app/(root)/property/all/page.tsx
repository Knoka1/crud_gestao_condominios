"use client";
import React, { useEffect, useState } from "react";
import AltPropertyCard from "@/components/Cards/AltPropertyCard";
import Searchbar from "@/components/UiCustom/Searchbar";
import { fetchProperties } from "@/lib/api/fetchProperties";
import { deletePropertyById } from "@/lib/api/deletePropertyById";
import { useToast } from "@/components/ui/use-toast";

const AllProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getProperties = async () => {
      try {
        setIsLoading(true);
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties);
        if (fetchedProperties.length === 0) {
          setIsDataEmpty(true);
        }
      } catch (err) {
        setError(
          "Erro ao buscar as propriedades. Por favor, tente novamente mais tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    getProperties();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = properties.filter((property) =>
      property.nome.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleDelete = async (id: number) => {
    const response = await deletePropertyById(id);
    if (response === null) {
      return toast({
        title: "Não foi possível deletar",
        description: "Por favor, tente novamente mais tarde",
      });
    } else {
      const updatedProperties = filteredProperties.filter(
        (property) => property.id !== id
      );
      setFilteredProperties(updatedProperties);
      return toast({
        title: "Deletado com Sucesso",
        description: `Condomínio ${id} deletado com sucesso`,
      });
    }
  };

  return (
    <div>
      <div className="home__filters mb-3 w-max-8">
        <Searchbar onSearch={handleSearch} />
        Add novo
      </div>
      {isLoading ? (
        <p>Carregando nossos Condomínios...</p>
      ) : !isDataEmpty ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <div key={property.id} className="mb-4 mr-2">
                <AltPropertyCard
                  property={property}
                  onDelete={() => handleDelete(property.id)}
                />
              </div>
            ))}
          </div>
        </section>
      ) : error ? (
        <div className="home__error-container">
          <h2 className="text-xl text-black font-bold">{error}</h2>
        </div>
      ) : (
        <div className="home__error-container">
          <h2 className="text-xl text-black font-bold">
            Oops, parece que não conseguimos mostrar num momento
          </h2>
        </div>
      )}
    </div>
  );
};

export default AllProperties;
