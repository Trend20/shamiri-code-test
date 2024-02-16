import { getLocationById } from "@/app/api/locations";
import React from "react";

const Location = async ({ params }: { params: { id: string } }) => {
  const locationId = params.id;
  const location = await getLocationById(locationId);
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
        
      </div>
    </main>
  );
};

export default Location;
