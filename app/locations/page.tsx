// "use client";
import React, { useState } from "react";
import { getAllLocations } from "../api/locations";
import LocationCard from "@/components/LocationCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

const Locations = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const currentPage = searchParams?.page || "1";
  const { info, results } = await getAllLocations(currentPage);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredLocations = results.filter((location: any) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-bold">Locations</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <div className="grid grid-cols-4 gap-10">
        {filteredLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Pagination pages={info.pages} currentPage={Number(currentPage) - 1} />
    </main>
  );
};

export default Locations;
