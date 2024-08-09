import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderSignIn from "../HeaderSignIn";
import Logo from "./Logo";

const HeaderBar = () => {
  return (
    <div className=" bg-white z-20">
      <div className="flex justify-between w-full items-center mt-2">
        <Navbar />
        {/* Logo */}
        {/* bg-white neutraliza o hover já que queremos manter esse comportamento para outros botões shadcn */}
        <Button
          variant="ghost"
          className="outline-none hover:bg-white "
          asChild
        >
          <Link href="/">
            <Logo />
          </Link>
        </Button>
        <HeaderSignIn />
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default HeaderBar;
