import dayjs from "dayjs";
import { useState } from "react";
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "./Button";

const Calendar = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex mt-5 justify-center sm:flex-row ">
      {/* calendar start */}
      <div className="flex-1 w-[60%] lg:w-full">
        {/* header start */}
        <div className="flex p-1 mb-3 items-center justify-center">
          <div className="flex gap-14 items-center">
            {/* previous icon */}
            <div>
              <GrFormPrevious
                className="w-8 h-8 p-1 cursor-pointer rounded-full 
             hover:bg-date-hover 
                hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
            </div>
            {/* display current date */}
            <div>
              <h5
                className="cursor-pointer hover:scale-105 transition-all flex justify-center font-thin"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                {months[today.month()]} {today.year()}
              </h5>
            </div>
            {/* next icon */}
            <div>
              <GrFormNext
                className="w-8 h-8 p-1 cursor-pointer rounded-full hover:bg-date-hover hover:scale-105 transition-all"
                style={{ color: "#0069ff" }}
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
        </div>
        {/* header end */}

        {/* display the days of the week */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-xs text-center h-12 w-12 grid place-content-center select-none text-header-color font-thin"
              >
                {day}
              </h1>
            );
          })}
        </div>

        {/* dates of the month */}
        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth }, index) => {
              // do not show if the date is not in the current month
              if (!currentMonth) {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center"
                  >
                    <div className="h-10 w-10"></div> {/* Placeholder */}
                  </div>
                );
              }

              const isDisabled = ![7, 8, 9].includes(date.date());

              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm"
                >
                  <h1
                    className={cn(
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-date-selected text-white"
                        : "text-date-color ",
                      isDisabled
                        ? "font-thin text-gray-500 pointer-events-none"
                        : " hover:bg-date-hover bg-date-background",
                      "h-11 w-11 text-base rounded-full grid place-content-center font-semibold transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      if (!isDisabled) {
                        setSelectDate(date);
                      }
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
        {/* time zone start */}
        <div>
          <h1 className="font-semibold text-header-color">Time zone</h1>
          <button className="px-3 py-2 rounded-full hover:bg-button-hover">
            <div className="flex text-header-color text-sm">
              <HiGlobeAsiaAustralia className="mr-2 text-lg" />
              <span className="ml-1">Yerevan (8:29am)</span>
              <AiFillCaretDown className="mt-1 text-xs" />
            </div>
          </button>
        </div>
      </div>
      {/* calendar end */}

      {/* show right-hand button start  */}
      <div className="sm:hidden pl-4 w-[40%]">
        <div>
          <h1 className="text-header-color mb-6 lg:mb-10">
            {selectDate.format("dddd, MMMM D")}
          </h1>
          <Button time="11:30am" />
          <Button time="12:30pm" />
          <Button time="3:30pm" />
        </div>
      </div>
      {/* show right-hand button end */}
    </div>
  );
};

export default Calendar;
