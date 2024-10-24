import React from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { DateRange } from "react-day-picker";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BookingRequestForm = ({
  roomPrice,
  date,
  setDate,
  path,
  setFormIsSubmitted,
}: {
  roomPrice: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  setFormIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}) => {
  const router = useRouter();
  console.log(path);
  return (
    <>
      <span className="text-2xl text-primary font-semibold mb-2 block">
        {parseFloat(roomPrice).toFixed(2) ?? "0.00"} per night
      </span>
      <DatePickerWithRange date={date} setDate={setDate} />
      <Button
        onClick={() => {
          // router.push(`/${path}/booking`);
          setFormIsSubmitted(true);
        }}
        className="text-default"
      >
        SUBMIT
      </Button>
    </>
  );
};

export default BookingRequestForm;
