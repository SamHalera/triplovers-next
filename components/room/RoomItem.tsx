import { cn } from "@/lib/cn";
import { slugify } from "@/lib/slugify";
import { BedSingle, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const RoomItem = ({ item }: { item: RoomType }) => {
  const slug = slugify(item.name);
  return (
    <Link
      href={`/our-rooms/${slug}`}
      className="border border-default shadow-sm flex flex-col gap-4  rounded-md duration-500 group relative"
    >
      <span
        className={cn(
          "p-2 rounded-3xl self-end text-xs font-semibold text-primary absolute top-4 right-2 z-10",
          {
            "bg-green-300": item.isAvailable,
            "bg-red-400": !item.isAvailable,
          }
        )}
      >
        {item.isAvailable ? "available" : "complete"}
      </span>
      <div className=" overflow-hidden">
        <div
          className="bg-cover bg-center w-52 h-52 flex flex-col p-2 duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${process.env.STRAPI_API_URL}${item.image.url})`,
          }}
        ></div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <h2>{item.name}</h2>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <BedSingle /> {item.nbBeds}
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <UserRound />
            {item.nbPeople}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RoomItem;
