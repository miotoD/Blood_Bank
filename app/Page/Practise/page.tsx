"use client";

import { resolve } from "path";
import React from "react";
import { useForm } from "react-hook-form";

function Practise() {
  type formField = {
    Username: string;
    Password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formField>();

  const submitForm = async (data) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve;
        console.log("Promise pani resolve vayo", resolve);
        console.log(" data sent succesfully", data);
        reset();
      }, 3000);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="username">Username</label>
        <input
          className=" border-[2px] border-black m-4"
          {...register("Username", {
            required: "UserName required!",
          })}
        />
        {errors.Username && (
          <div className=" text-red-500">{errors.Username.message}</div>
        )}

        <label htmlFor="Password">Password</label>
        <input
          className="border-[2px] border-black"
          {...register("Password", {
            minLength: {
              value: 8,
              message: " Minimum 8 characters required",
            },
            required: "Password required!",
          })}
        />
        {errors.Password && (
          <div className=" text-red-500">{errors.Password.message}</div>
        )}

        <button
          className=" border-blue-400 border-[2px] ml-3"
          disabled={isSubmitting}
        >
          {" "}
          {isSubmitting ? "Sending...." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Practise;
