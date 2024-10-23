import React from "react";
import RoomItem from "./RoomItem";

const RoomsList = ({ roomListData }: { roomListData: RoomType[] }) => {
  return (
    <div className="flex gap-6 items-center justify-center">
      {roomListData &&
        roomListData.length > 0 &&
        roomListData.map((item: RoomType) => {
          return <RoomItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default RoomsList;
