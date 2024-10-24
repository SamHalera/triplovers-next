import { BedSingle, MapPinIcon, UserRound } from "lucide-react";
import React from "react";

const RoomDetails = ({ data }: { data: RoomType }) => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <h1 className="text-3xl text-primary">
        {" "}
        Room - {data.name} -{" "}
        <span className="font-semibold text-ternary">
          {parseFloat(data.price).toFixed(2)} {data.currency} / night
        </span>
      </h1>
      <div className="flex items-center gap-4 pb-4 border-b-2 border-b-default">
        <span className="flex gap-1">
          <BedSingle /> {data.nbBeds} beds
        </span>
        <span className="flex gap-1">
          {" "}
          <UserRound />
          {data.nbPeople} persons
        </span>
        <span className="flex gap-1">
          <MapPinIcon /> 27 rue la Clefs de la Ferme, 93400 Saint-Ouen-sur-Seine
        </span>
      </div>
      <div>
        <h2 className="text-2xl text-secondary">Description</h2>
        <div dangerouslySetInnerHTML={{ __html: data.details }} />
      </div>
    </div>
  );
};

export default RoomDetails;
