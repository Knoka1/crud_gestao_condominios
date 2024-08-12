import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import CustomFilter from "@/components/UiCustom/CustomFilter";
import Searchbar from "@/components/UiCustom/Searchbar";
import { fetchProperties } from "@/lib/api/fetchProperties";
import React from "react";

const Home = async () => {
  let properties: Property[] = [];
  let error: string | null = null;
  let isDataEmpty = false;
  try {
    properties = await fetchProperties();
    if (properties.length === 0) {
      isDataEmpty = true;
    }
  } catch (err) {
    error =
      "Erro ao buscar as propriedades. Por favor, tente novamente mais tarde.";
  }
  return (
    <div>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {" "}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Condomínios</h1>
          <p>Explore os nossos Condomínios</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="inicioAdministracao" />
            <CustomFilter title="unidades" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__property-wrapper">
              {properties?.map((property) => (
                <PropertyCard property={property} />
              ))}
            </div>
          </section>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl text-black font-bold">
              Oops, parece que não conseguimos mostrar num momento
            </h2>{" "}
          </div>
        )}
      </div>

      {/* <>
          <ul>
            {properties.map((property) => (
              <li key={property.id}>
                <h2>{property.nome}</h2>
                <p>Address: {property.endereco}</p>
                <p>CNPJ: {property.cnpj}</p>
                <p>Units: {property.quantidadeUnidades}</p>
                <p>
                  Start Date:{" "}
                  {new Date(property.inicioAdministracao).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </> */}
    </div>
  );
};

export default Home;
