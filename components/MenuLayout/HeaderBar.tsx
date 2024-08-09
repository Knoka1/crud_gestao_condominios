import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "@/public/propertyLogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderBar = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between w-full items-center">
        <Navbar />
        <Button variant="ghost" className="outline-none" asChild>
          <Link href="/">
            <Image src={logo} alt="House Logo" className="h-10 w-14" />
            <h4 className="hidden sm:inline">Meu Condomínio.com</h4>
          </Link>
        </Button>
        AvatarIcon
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default HeaderBar;
