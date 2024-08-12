"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <div className="flex w-full items-center space-x-2">
          <Input placeholder="Buscar..." />
          <Button className="hover:bg-cyan-500" type="submit">
            <FaSearch />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
