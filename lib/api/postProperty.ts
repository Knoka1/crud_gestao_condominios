import api from "../../services/api";

export const postProperty = async (data: Property): Promise<Property[]> => {
  try {
    const response = await api.post("/Condominios", data);
    return response.data;
  } catch (error) {
    console.error("Error posting properties:", error);
    return [];
  }
};
