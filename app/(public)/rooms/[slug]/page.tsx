import { getSingleRoom } from "@/actions/rooms";
import RoomContent from "@/components/room/RoomContent";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getSingleRoom(slug);
  const path = `our-rooms/${slug}`;
  if (!data) return;
  return (
    <div className="p-14">
      <RoomContent data={data} path={path} />
    </div>
  );
};

export default page;
