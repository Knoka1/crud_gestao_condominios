declare type Property = {
  id: number;
  nome: string;
  endereco: string;
  cnpj: string;
  quantidadeUnidades: number;
  inicioAdministracao: string;
};
declare type PropertyFormData = {
  id?: number;
  nome?: string | null;
  endereco?: string | null;
  cnpj?: string | null;
  quantidadeUnidades: number;
  inicioAdministracao: string;
};
