import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";

interface PropertyFormProps {
  type: "edit" | "new";
  defaultValues?: Partial<z.infer<typeof formSchema>>;
}

const formSchema = z.object({
  nome: z.string(),
  endereco: z.string(),
  cnpj: z.string(),
  quantidadeUnidades: z
    .number()
    .min(1, { message: "A unidade precisa pelo menos 1 números." }),
  inicioAdministracao: z.string({
    message: "O condomínio precisa de uma data.",
  }),
});

const PropertyForm = ({ type, defaultValues }: PropertyFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantidadeUnidades: 1,
      inicioAdministracao: "2024-08-14",
      ...defaultValues, // Se o tipo for "edit", isso vai dar override nos defaults
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      ...values,
      inicioAdministracao: new Date(values.inicioAdministracao)
        .toISOString()
        .slice(0, 10),
    };
    console.log(formattedValues);
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          <div className="flex flex-wrap space-x-2 my-2">
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input placeholder="123.321.451-99" {...field} />
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
          <div className="flex items-center my-2">
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
            <Button className="rounded-md bg-cyan-600 ml-24 mt-8" type="submit">
              <p className="pr-1">Adicionar</p>
              <IoIosAddCircleOutline size={20} />
            </Button>
          </div>
        </form>
      </Form>
      {/* <header className="flex flex-col gap-5 md:gap-8"></header> */}
    </section>
  );
};

export default PropertyForm;
