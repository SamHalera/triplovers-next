"use client";

import { useEffect, useState } from "react";

import { DateRange } from "react-day-picker";
import { addDays, format, formatDistanceStrict } from "date-fns";
import BookingRequestForm from "./BookingRequestForm";

export const ReservationWidget = ({
  data,
  isAvailable,

  path,
  children,
}: {
  data: RoomType;
  isAvailable: boolean;

  path?: string;
  children?: React.ReactNode;
}) => {
  const [formIsSubmitted, setFormIsSubmitted] = useState<boolean>(false);
  const [priceState, setPrice] = useState<number>(parseFloat(data.price));
  const [nbNightsState, setNbNightsState] = useState<number>(1);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  const cleaningFee = 20;
  const taxes = 16;
  const dateFrom = date?.from ? date.from : new Date();
  const dateTo = date?.to ? date.to : addDays(new Date(), 1);
  const datesDistance = formatDistanceStrict(dateFrom, dateTo, {
    unit: "day",
  }).replace(/[a-z]/g, "");

  const [totalState, setTotalState] = useState<number>(
    priceState * parseFloat(datesDistance) + cleaningFee + taxes
  );
  useEffect(() => {
    setTotalState(priceState * parseFloat(datesDistance) + cleaningFee + taxes);
  }, [date]);
  return (
    <div className="shadow-sm rounded-md sticky border border-default w-[500px]  top-40 h-96 p-6">
      <div className="flex flex-col gap-6">
        {!formIsSubmitted && path ? (
          <BookingRequestForm
            roomPrice={data.price}
            date={date}
            setDate={setDate}
            path={path}
            setFormIsSubmitted={setFormIsSubmitted}
          />
        ) : (
          children
        )}

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <span>
              {parseFloat(data.price).toFixed(2)} {data.currency} x{" "}
              {datesDistance} night{nbNightsState > 1 && "s"}
            </span>
            <span>
              {parseFloat(data.price).toFixed(2)} {data.currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>
              {cleaningFee} {data.currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>
              {taxes} {data.currency}
            </span>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <span className="font-semibold text-primary">Total</span>
            <span> {totalState}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
