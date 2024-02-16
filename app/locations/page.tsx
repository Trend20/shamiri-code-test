import React from "react";
import { getAllLocations } from "../api/locations";
import LocationCard from "@/components/LocationCard";
import Pagination from "@/components/Pagination";

const Locations = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const currentPage = searchParams?.page || "1";
  const { info, results } = await getAllLocations(currentPage);
  return (
    <main className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">Locations</h1>
      <div className="grid grid-cols-4 gap-10">
        {results.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Pagination pages={info.pages} currentPage={Number(currentPage) - 1} />
    </main>
  );
};

export default Locations;
