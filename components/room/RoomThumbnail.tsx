import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const RoomThumbnail = ({ data }: { data: RoomType }) => {
  return (
    <div className="flex gap-4">
      {data.image && (
        <Image
          className="w-32 h-32 rounded-md object-cover"
          src={`${process.env.STRAPI_API_URL}${data.image.url}`}
          width={data.image.width}
          height={data.image.height}
          alt={data.image.alternativeText ?? ""}
        />
      )}

      <div className="flex flex-col gap-1">
        <h3 className="text-primary font-semibold text-2xl">{data.name}</h3>
        <span>{data.subtitle ?? ""}</span>
        <span className="flex gap-1 items-center">
          <StarFilledIcon /> 4.83
        </span>
      </div>
    </div>
  );
};

export default RoomThumbnail;
