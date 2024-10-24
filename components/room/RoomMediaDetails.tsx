import Image from "next/image";
import React from "react";

const RoomMediaDetails = ({ data }: { data: RoomType }) => {
  return (
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
  );
};

export default RoomMediaDetails;
