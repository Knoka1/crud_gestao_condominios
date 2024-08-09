import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "@/public/propertyLogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderSignIn from "../HeaderSignIn";

const HeaderBar = () => {
  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between w-full items-center">
        <Navbar />
        {/* Logo */}
        {/* bg-white neutraliza o hover já que queremos manter esse comportamento para outros botões shadcn */}
        <Button
          variant="ghost"
          className="outline-none hover:bg-white "
          asChild
        >
          <Link href="/">
            <h4 className="hidden sm:inline font-pacifico text-cyan-600">
              Condominio.com
            </h4>
          </Link>
        </Button>
        <HeaderSignIn />
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default HeaderBar;
