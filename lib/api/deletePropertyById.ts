import api from "@/services/api";
import axios from "axios";

export const deletePropertyById = async (
  id: number
): Promise<Property | null> => {
  try {
    const response = await api.delete(`/Condominios/${id}`);
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
      console.error("Error deleting property:", error);
    }

    return null;
  }
};
