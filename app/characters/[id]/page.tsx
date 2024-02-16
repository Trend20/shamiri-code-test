import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCharacterById } from "@/app/api/characters";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const Character = async ({ params }: { params: { id: string } }) => {
  const characterId = params.id;
  const character = await getCharacterById(characterId);
  return (
    <main className="w-full min-h-screen px-20 py-10">
      <div className="flex flex-col">
        <div className="flex gap-10 py-5">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority
          />
          <div>
            <h1>{character.name}</h1>
            <div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<MdMonitorHeart />}
                  Status
                </span>
                <span>{character.status}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<GiPlantsAndAnimals />}
                  Species
                </span>
                <span>{character.species}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<FaTag />}
                  Type
                </span>
                <span>{character.type || "---"}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<PiGenderIntersexBold />}
                  Gender
                </span>
                <span>{character.gender}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<FaGlobe />}
                  Origin
                </span>
                <span>{character.origin.name}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<FaMapMarkerAlt />}
                  Location
                </span>
                <span>{character.location.name}</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center">
                  {<FaRegCalendarAlt />}
                  Created
                </span>
                <span>{new Date(character.created).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </main>
  );
};

export default Character;
