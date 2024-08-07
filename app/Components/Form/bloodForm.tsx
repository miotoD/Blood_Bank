"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import axiosClient from "@/app/axios-client/axios-client";

function BloodForm({ close }) {
  type formFields = {
    BloodType: string;
    HospitalName: string;
    BloodPint: string;
    RequiredBy: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formFields>();

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarPopup, setCalendarPopup] = useState(false);

  // The handleSubmit function of react-hook-form calls this submitForm function
  const submitForm: SubmitHandler<formFields> = async (data) => {
    try {
      await axiosClient
        .post("http://localhost:3001/blood_request", data)
        .then((resp) => {
          console.log("The response got is:", resp.data);
        });
    } catch (error) {
      console.log("Error occurred!", error);
    }
  };

  function closePopup() {
    close(false);
  }

  function handleCalendar() {
    setCalendarPopup(true);
    console.log("Clicked!");

    if (calendarPopup) {
      setCalendarPopup(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1
            className=" text-black font-extrabold text-2xl text-end hover:cursor-pointer hover:text-red-400"
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
            id="bloodGroup"
            className=" border-[2px]  text-black ml-3 p-1"
            {...register("BloodType", {
              required: "Required Blood Group",
            })}
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
          {errors.BloodPint && (
            <div className=" text-red-400">{errors.BloodPint.message}</div>
          )}
          <br />

          <input
            type="text"
            list="hospitals"
            placeholder="Hospital Name"
            {...register("HospitalName", {
              required: " Reuired Hospital Name",
            })}
            className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold mt-4"
          />
          {errors.HospitalName && (
            <div className=" text-red-400">{errors.HospitalName.message}</div>
          )}

          <datalist id="hospitals">
            <option value="Scheer Memorial Hospital" />
            <option value="Kathmandu Medical Hospital" />
            <option value="BNB Hospital" />
            <option value="Kathmandu Teaching Hospital" />
          </datalist>
          <br />

          <input
            type="text"
            {...register("BloodPint", {
              required: "Required Blood Pint",
            })}
            placeholder="Blood Pint"
            className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold"
          />
          {errors.BloodPint && (
            <div className=" text-red-400">{errors.BloodPint.message}</div>
          )}
          <br />
          <input
            type="text"
            placeholder="Required By"
            {...register("RequiredBy", {
              required: "Date Required",
            })}
            readOnly
            className="w-[420px] mb-4 p-2 border-b-2 border-gray-300 focus:outline-none text-black font-semibold hover:bg-gray-200 hover:cursor-pointer"
            onClick={handleCalendar}
          />
          <img
            src="/calendar.jpg"
            alt="calendar"
            className=" h-8 w-8 -mt-14 ml-96 hover:cursor-pointer"
            onClick={handleCalendar}
          />

          {errors.RequiredBy && (
            <div className=" text-red-400 mt-3">
              {errors.RequiredBy.message}
            </div>
          )}

          <br />
          <button
            className="bg-orange-400 w-96 p-2 mt-4 rounded-lg font-semibold hover:bg-orange-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Requesting..." : "Request"}
          </button>
        </div>

        {calendarPopup ? (
          <Calendar
            className=" bg-white text-red-500 w-fit h-[300px] mt-[10px] ml-[60px] absolute"
            selected={selectedDate}
            onDayClick={(date) => {
              const formattedDate = date.toLocaleDateString();
              setSelectedDate(formattedDate);
              setValue("RequiredBy", formattedDate);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default BloodForm;
