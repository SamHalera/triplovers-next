import { BedSingle, MapPinIcon, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ReservationWidget } from "./ReservationWidget";

const RoomContent = ({ data }: { data: RoomType }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        {data.image && (
          <Image
            className="w-[600px] h-[400px] object-cover"
            src={`${process.env.STRAPI_API_URL}${data.image.url}`}
            width={data.image.width}
            height={data.image.height}
            alt={data.image.alternativeText ?? ""}
          />
        )}

        <div className="bg-default flex-1 flex justify-center items-center">
          MEDIA HERE
        </div>
      </div>

      <div className="flex justify-between gap-6">
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
              <MapPinIcon /> 27 rue la Clefs de la Ferme, 93400
              Saint-Ouen-sur-Seine
            </span>
          </div>
          <div>
            <h2 className="text-2xl text-secondary">Description</h2>
            <div dangerouslySetInnerHTML={{ __html: data.details }} />
          </div>
        </div>

        <ReservationWidget
          roomPrice={data.price}
          currency={data.currency}
          isAvailable={data.isAvailable}
        />
      </div>
    </div>
  );
};

export default RoomContent;
