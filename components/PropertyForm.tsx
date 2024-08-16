import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ReloadIcon } from "@radix-ui/react-icons";

interface PropertyFormProps {
  type: "edit" | "new";
  defaultValues?: Partial<z.infer<typeof formSchema>>;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

// CNPJ Validation Regex
const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const formatCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );
};

const formSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O Nome precisa ter ao menos 3 caracteres" }),
  endereco: z
    .string()
    .min(3, { message: "O Endereço precisa ter ao menos 3 caracteres" }),
  cnpj: z.string().refine((value) => CNPJ_REGEX.test(value), {
    message: "CNPJ inválido. O formato esperado é 00.000.000/0001-00.",
  }),
  quantidadeUnidades: z
    .number()
    .min(1, { message: "A unidade precisa pelo menos 1 número." }),
  inicioAdministracao: z.string(),
});

const PropertyForm = ({ type, defaultValues, onSubmit }: PropertyFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantidadeUnidades: 1,
      inicioAdministracao: new Date().toISOString(),
      ...defaultValues, // Se o tipo for "edit", isso vai dar override nos defaults
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const date =
      values.inicioAdministracao === ""
        ? new Date().toISOString()
        : new Date(values.inicioAdministracao).toISOString();
    setIsLoading(true);
    const formattedValues = {
      ...values,
      inicioAdministracao: date,
    };
    await onSubmit(formattedValues);
    setIsLoading(false);
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatCNPJ(value);
    form.setValue("cnpj", formattedValue);
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do condomínio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endereco"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input placeholder="Av Borba Gato, 15" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-3">
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="00.000.000/0001-00"
                      value={field.value}
                      onChange={handleCNPJChange}
                      maxLength={18} // 14 dígitos + 4 characteres (dots, slash, hyphen)
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantidadeUnidades"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidades</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            <FormField
              control={form.control}
              name="inicioAdministracao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Início da Administração</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              className="rounded-md bg-cyan-600 ml-24 mt-8"
              type="submit"
            >
              {!isLoading ? (
                <>
                  <p className="pr-1">
                    {type === "edit" ? "Atualizar" : "Adicionar"}
                  </p>
                  <IoIosAddCircleOutline size={20} />
                </>
              ) : (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  <p className="pr-1">Enviando...</p>
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default PropertyForm;
