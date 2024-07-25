"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function BloodForm({ close }) {
  function closePopup() {
    close(false);
  }

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarPopup, setCalendarPopup] = useState(false);

  function handleCalendar() {
    setCalendarPopup(true);
    console.log("Clicked!");

    if (calendarPopup) {
      setCalendarPopup(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1
          className=" text-black font-extrabold text-2xl text-end hover:cursor-pointer hover:text-red-500"
          onClick={closePopup}
        >
          X
        </h1>
        <h1 className="text-2xl font-bold mb-8 text-red-500 text-center">
          Request Blood Form
        </h1>
        <label htmlFor="bloodGroup" className=" text-black ">
          {" "}
          BloodGroup
        </label>
        <select
          name="bloodGroup"
          id="bloodGroup"
          className=" border-[2px] border-black text-black ml-3 p-1"
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Hospital Name"
          className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold mt-4"
        />
        <br />
        <input
          type="text"
          placeholder="Blood Pint"
          className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold"
        />
        <br />
        <input
          type="text"
          placeholder="Required By"
          className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold hover:bg-gray-200 hover:cursor-pointer"
          onClick={handleCalendar}
        />
        <img
          src="/calendar.jpg"
          alt="calendar"
          className=" h-8 w-8 -mt-14 ml-96 hover:cursor-pointer"
          onClick={handleCalendar}
        />

        <br />
        <button className="bg-orange-400 w-96 p-2 mt-4 rounded-lg font-semibold hover:bg-orange-300">
          Request
        </button>
      </div>

      {calendarPopup ? (
        <Calendar
          className=" bg-white text-red-500 w-fit mt-[20px] ml-[-90px] absolute"
          selected={selectedDate}
          onDayClick={(date) => setSelectedDate(date)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default BloodForm;
