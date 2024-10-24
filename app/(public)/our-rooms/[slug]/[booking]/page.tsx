import { getSingleRoom } from "@/actions/rooms";
import { ReservationWidget } from "@/components/room/ReservationWidget";
import RoomThumbnail from "@/components/room/RoomThumbnail";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { [key: string]: string } }) => {
  const { slug } = params;
  console.log(slug);
  const data = await getSingleRoom(slug);
  const path = `our-rooms/${slug}`;
  return (
    <div>
      BOOKING
      <Link href={`/${path}`} className="flex gap-2 cursor-pointer">
        <CircleArrowLeft /> Back to room details
      </Link>
    </div>
  );
};

export default page;
