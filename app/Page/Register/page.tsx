"use client";

import React, { useState } from "react";
import PrimaryNav from "../../Components/Headers/PrimaryNav";
import axios from "axios";
import Footer from "@/app/Components/Footers/Footer";

function Register() {
  const [UserName, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const userData = {
    UserName,
    Email,
    Password,
  };

  console.log("the data is:", UserName, Email, Password);

  const URL = "http://localhost:3001/register";

  function registerUser() {
    axios
      .post("http://localhost:3001/register", userData)
      .then((resp) => {
        console.log("Data succesfully posted!", resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <PrimaryNav />
      <div className=" w-full h-screen flex">
        <div className=" w-[50%] h-screen">
          <h1 className=" text-3xl text-center mt-24 font-bold text-red-600">
            {" "}
            Register Your Account{" "}
          </h1>
          <p className=" text-center text-xs mt-3 font-bold text-red-600">
            {" "}
            Be a life saver or save the life of people you love.
          </p>

          <div className="  h-60 w-full mt-12 ">
            <p className=" text-red-600 font-semibold text-center text-lg">
              UserName
            </p>
            <input
              type="text"
              name="firstname"
              placeholder="Your Name "
              value={UserName}
              onChange={(event) => setUsername(event.target.value)}
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-80 ml-36 text-center text-white font-semibold rounded-md"
            />

            <p className=" text-red-600 font-semibold text-center text-lg mt-6">
              Email
            </p>
            <input
              type="email"
              placeholder="Enter Email"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
              name="firstname"
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-80 ml-36 text-center text-white font-semibold rounded-md"
            />

            <p className=" text-red-600 font-semibold text-center text-lg mt-6">
              Password
            </p>
            <input
              type="password"
              placeholder="Create Password"
              name="firstname"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-80 ml-36 text-center text-white font-semibold rounded-md "
            />

            <div className=" flex justify-center mt-8">
              <button
                className=" bg-orange-500 w-48 font-semibold rounded-md text-white hover:bg-orange-400"
                onClick={registerUser}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[50%]  h-screen">
          <img src="/why.jpeg" alt="background" className="  w-full" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
