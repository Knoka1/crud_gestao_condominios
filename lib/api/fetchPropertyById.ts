import api from "@/services/api";
import axios from "axios";

export const fetchPropertyById = async (
  id: string
): Promise<Property | null> => {
  try {
    const response = await api.get(`/Condominios/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response;

      if (status === 404) {
        console.error("Property not found:", data);
        return null;
      }
      if (status >= 500) {
        console.error("Server or API error:", data);
      } else {
        console.error("Unexpected error:", data);
      }
    } else {
      console.error("Error fetching property:", error);
    }

    return null;
  }
};
