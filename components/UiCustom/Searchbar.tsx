"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";

interface ISearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar = ({ onSearch }: ISearchbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="hover:bg-cyan-500" type="submit">
            <FaSearch />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
