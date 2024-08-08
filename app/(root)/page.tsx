import { fetchProperties } from "@/lib/api/fetchProperties";
import React, { useEffect, useState } from "react";

const Home = async () => {
  let properties: Property[] = [];
  let error: string | null = null;

  try {
    properties = await fetchProperties();
    if (properties.length === 0) {
      error = "No properties found.";
    }
  } catch (err) {
    error = "Error fetching properties. Please try again later.";
  }
  return (
    <div>
      <h1>Properties</h1>
      {error ? (
        <p>{error}</p>
      ) : (
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
      )}
    </div>
  );
};

export default Home;
