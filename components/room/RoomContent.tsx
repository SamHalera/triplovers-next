import React from "react";
import { ReservationWidget } from "./ReservationWidget";
import RoomDetails from "./RoomDetails";
import RoomMediaDetails from "./RoomMediaDetails";
import RoomThumbnail from "./RoomThumbnail";

const RoomContent = ({ data, path }: { data: RoomType; path: string }) => {
  return (
    <div className="flex flex-col gap-8">
      <RoomMediaDetails data={data} />
      <div className="flex justify-between gap-6">
        <RoomDetails data={data} />

        <ReservationWidget
          isAvailable={data.isAvailable}
          data={data}
          path={path}
        >
          <RoomThumbnail data={data} />
        </ReservationWidget>
      </div>
    </div>
  );
};

export default RoomContent;
