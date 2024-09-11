const { fetchPropertyById } = require("@/services/fetchPropertyById"); // Adjust the import path as needed
const api = require("@/services/api");
const axios = require("axios");

// Mock the `api.get` method
jest.mock("@/services/api");

describe("fetchPropertyById", () => {
  it("should return property data when the API call is successful", async () => {
    const mockProperty = {
      id: 1,
      nome: "Property Name",
      endereco: "123 Street",
      cnpj: "12345678000195",
      quantidadeUnidades: 10,
      inicioAdministracao: "2024-01-01",
    };

    api.get.mockResolvedValue({ data: mockProperty });

    const result = await fetchPropertyById(1);
    expect(result).toEqual(mockProperty);
  });

  it("should return null when the property is not found (404)", async () => {
    api.get.mockRejectedValue({
      response: { status: 404, data: "Not Found" },
      isAxiosError: true,
    });

    const result = await fetchPropertyById(1);
    expect(result).toBeNull();
  });

  it("should handle server errors (500)", async () => {
    api.get.mockRejectedValue({
      response: { status: 500, data: "Server Error" },
      isAxiosError: true,
    });

    const result = await fetchPropertyById(1);
    expect(result).toBeNull();
  });

  it("should handle unexpected errors", async () => {
    api.get.mockRejectedValue(new Error("Unexpected Error"));

    const result = await fetchPropertyById(1);
    expect(result).toBeNull();
  });
});
