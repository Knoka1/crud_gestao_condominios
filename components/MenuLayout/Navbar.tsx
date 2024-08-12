"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu size={20} className="mt-1" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Logo />
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16">
                {navLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-cyan-500": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Navbar;
