import Image from "next/image";
import Link from "next/link";
import { getLocationById } from "@/app/api/locations";
import React from "react";
import { BsDashCircleFill } from "react-icons/bs";
import { getCharactersFromUrls } from "@/app/api/characters";

const Location = async ({ params }: { params: { id: string } }) => {
  const locationId = params.id;
  const location = await getLocationById(locationId);
  const residents = await getCharactersFromUrls(location.residents);
  return (
    <main className="py-40">
      <div className="flex flex-col m-auto p-20 gap-20">
        <div className="flex flex-col">
          <h1 className="text-2xl text-body mt-0 mb-5">{location.name}</h1>
          <div className="grid">
            <div className="flex items-center">
              <span className="font-bold">Type:</span>
              <span className="ml-5">{location.type}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Dimension:</span>
              <span className="ml-5">{location.dimension}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Created:</span>
              <span className="ml-5">
                {new Date(location.created).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Residents</h2>
          {location.residents.length === 0 ? (
            <span>
              <BsDashCircleFill />
              There are not residents in this location
            </span>
          ) : (
            <div>
              {residents.map((resident: any) => (
                <div key={resident.id}>
                  <Image
                    src={resident.image}
                    alt={resident.name}
                    width={300}
                    height={300}
                    priority
                  />
                  <div>
                    <Link href={`/characters/${resident.id}`}>
                      {resident.name}
                    </Link>
                    <span>Status: {resident.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Location;
