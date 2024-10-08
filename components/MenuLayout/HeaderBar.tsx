import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./Logo";
import HeaderSignIn from "./HeaderSignIn";

const HeaderBar = () => {
  return (
    <div className="bg-white z-20 md:px-2">
      <div className="flex justify-evenly md:justify-normal w-full items-center mt-2">
        <Navbar />
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
        <div className="md:flex md:flex-1 md:justify-end">
          <HeaderSignIn />
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default HeaderBar;
