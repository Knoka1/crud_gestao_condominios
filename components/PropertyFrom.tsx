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

interface ProprietyFromProps {
  type: "edit" | "new";
}

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 chars." }),
});
const PropertyFrom = ({ type }: ProprietyFromProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="rounded-md bg-cyan-600" type="submit">
            <p className="pr-1">Adicionar</p>
            <IoIosAddCircleOutline size={20} />
          </Button>
        </form>
      </Form>
      {/* <header className="flex flex-col gap-5 md:gap-8"></header> */}
    </section>
  );
};

export default PropertyFrom;
