"use client";
import React, { useEffect, useState } from "react";
import AltPropertyCard from "@/components/Cards/AltPropertyCard";
import Searchbar from "@/components/UiCustom/Searchbar";
import { fetchProperties } from "@/lib/api/fetchProperties";
import { deletePropertyById } from "@/lib/api/deletePropertyById";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from "next/link";
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
    const filtered = properties.filter(
      (property) =>
        property.nome.toLowerCase().includes(query.toLowerCase()) ||
        property.endereco.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleDelete = async (id: number) => {
    const response = await deletePropertyById(id);
    if (response === null) {
      return toast({
        variant: "destructive",
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
      <h1 className="text-4xl font-extrabold">Seus Condomínios</h1>
      <p className="mt-2">Explore seus Condomínios cadastrados</p>
      <div className="home__filters mb-3 w-max-8">
        <Searchbar onSearch={handleSearch} />
        <Link href={"create/"}>
          <Button className="rounded-md bg-green-600">
            <p className="pr-1">Novo</p>
            <IoIosAddCircleOutline size={20} />
          </Button>
        </Link>
      </div>
      {isLoading ? (
        <p>Carregando nossos Condomínios...</p>
      ) : !isDataEmpty ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <div key={property.id} className="mb-4 mr-2">
                <AltPropertyCard property={property} onDelete={handleDelete} />
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
