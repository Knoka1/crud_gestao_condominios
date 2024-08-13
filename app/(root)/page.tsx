"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import CustomFilter from "@/components/UiCustom/CustomFilter";
import Searchbar from "@/components/UiCustom/Searchbar";
import { fetchProperties } from "@/lib/api/fetchProperties";

const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    const getProperties = async () => {
      try {
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

  return (
    <div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Condomínios</h1>
          <p>Explore os nossos Condomínios</p>
        </div>
        <div className="home__filters mb-3">
          <Searchbar onSearch={handleSearch} />
          <div className="home__filter-container">
            <CustomFilter title="inicioAdministracao" />
            <CustomFilter title="unidades" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__property-wrapper">
              {filteredProperties.map((property) => (
                <div key={property.id} className="mb-2">
                  <PropertyCard property={property} />
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
    </div>
  );
};

export default Home;
