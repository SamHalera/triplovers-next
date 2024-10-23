"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const ReservationWidget = ({
  roomPrice,
  currency,
  isAvailable,
}: {
  roomPrice: string;
  currency: string;
  isAvailable: boolean;
}) => {
  const [priceState, setPrice] = useState<number>(parseFloat(roomPrice));
  const [nbNightsState, setNbNightsState] = useState<number>(1);
  const [totalState, setTotalState] = useState<number>(0);
  const cleaningFee = 20;
  const taxes = 16;

  useEffect(() => {
    setTotalState(priceState * nbNightsState + cleaningFee + taxes);
  }, [nbNightsState]);
  return (
    <div className="shadow-sm rounded-md sticky border border-default w-[500px]  top-40 h-96 p-6">
      <div className="">
        <span className="text-2xl text-primary font-semibold mb-8 block">
          {parseFloat(roomPrice).toFixed(2) ?? "0.00"} night
        </span>

        <div className="text-primary flex  gap-5 px-6 py-2 border border-primary justify-self-start rounded-full mb-4">
          <PlusCircle
            onClick={() => {
              setNbNightsState((prev) => prev + 1);
            }}
          />
          <MinusCircle
            onClick={() => {
              setNbNightsState((prev) => {
                if (prev === 1) {
                  return 1;
                } else {
                  return prev - 1;
                }
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <span>
              {parseFloat(roomPrice).toFixed(2)} {currency} x {nbNightsState}{" "}
              night{nbNightsState > 1 && "s"}
            </span>
            <span>
              {parseFloat(roomPrice).toFixed(2)} {currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>
              {cleaningFee} {currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>
              {taxes} {currency}
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

// export default ReservationWidget;
