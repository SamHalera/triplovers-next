import { getRoomsList } from "@/actions/rooms";
import RoomsList from "@/components/room/RoomsList";
import React from "react";

const page = async () => {
  const roomListData = await getRoomsList();
  if (!roomListData) {
    return;
  }
  return (
    <div>
      OUR ROUMS
      <RoomsList roomListData={roomListData} />
    </div>
  );
};

export default page;
