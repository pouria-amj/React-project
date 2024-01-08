import { FC, SetStateAction, useState } from "react";
import Button from "../Components/Button";

const Appointment: FC = () => {
  const [sDate, setsDate] = useState(new Date());

  const findMonthDays = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const findFirstDay = (y: number, m: number) => {
    return new Date(y, m, 1).getDay();
  };

  const changeToPrevMonth = () => {
    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  const handleDateClick = (date: SetStateAction<Date>) => {
    setsDate(date);
  };

  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    const allDays = [];

    // For empty cells
    for (let p = 0; p < fDay; p++) {
      allDays.push(
        <div key={`em-${p}`} className="bg-[#e0e0e0] cursor-default"></div>
      );
    }

    // Show actual days
    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div
          key={`d-${d}`}
          className={`h-8 bg-[#f0f0f0] border border-solid border-[#ccc] flex justify-center items-center cursor-pointer ${
            isSelected ? "bg-blue-500 " : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {d}
        </div>
      );
    }

    return allDays;
  };
  return (
    <>
      <div className="flex justify-between items-center pb-7">
        <div className="flex items-center gap-6">
          <div className="rounded-full h-10 w-10 bg-slate-50 pt-[8.9px] pl-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
          <p className="text-2xl font-semibold">Book Appointment</p>
        </div>
      </div>
      <p className="text-xl font-semibold py-4">Select Date</p>

      <div className="flex justify-center">
        <div className="w-[320px] p-[0.7rem]  border border-solid border-blue-100 rounded-lg bg-slate-50">
          <div className="flex mb-[11.2px] justify-between items-center">
            <button
              className="cursor-pointer text-2xl"
              onClick={changeToPrevMonth}
            >
              {" "}
              {"<"}{" "}
            </button>
            <h2>
              {sDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <button
              className="cursor-pointer text-2xl"
              onClick={changeToNextMonth}
            >
              {" "}
              {">"}{" "}
            </button>
          </div>
          <div className=" grid grid-cols-7 gap-1">{showCalendar()} </div>
          {sDate && (
            <div className="selected-date pt-3">
              Selected Date: {sDate.toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-10 pt-2 ">
        <Button className=" focus:bg-blue-200" varient="outline">
          {"09.00 AM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"09.30 AM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"10.00 AM"}
        </Button>
      </div>
      <div className="flex gap-10 pt-2">
        <Button className=" focus:bg-blue-200" varient="outline">
          {"10.30 AM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"11.00 AM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"11.30 AM"}
        </Button>
      </div>
      <div className="flex gap-10 pt-2">
        <Button className=" focus:bg-blue-200" varient="outline">
          {"15.00 PM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"15.30 PM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"16.00 PM"}
        </Button>
      </div>
      <div className="flex gap-10 pt-2">
        <Button className=" focus:bg-blue-200" varient="outline">
          {"16.30 PM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"17.00 PM"}
        </Button>
        <Button className=" focus:bg-blue-200" varient="outline">
          {"17.30 PM"}
        </Button>
      </div>
      <Button className="my-5" varient="containd">
        {"Next"}
      </Button>
    </>
  );
};
export default Appointment;
