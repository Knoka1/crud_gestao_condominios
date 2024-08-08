import api from "../../services/api";

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const response = await api.get("/Condominios");
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
