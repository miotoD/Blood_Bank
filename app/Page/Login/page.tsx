"use client";

import React, { useState } from "react";
import PrimaryNav from "../../Components/Headers/PrimaryNav";
import { url } from "inspector";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  console.log("User credentials:", Email, Password);
  return (
    <>
      <div className=" w-full h-screen flex flex-col">
        <PrimaryNav />
        <div className=" h-full flex-grow flex -mt-1 ">
          <div
            className=" w-[50%]  bg-blue-600 h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/login-page.jpg')" }}
          ></div>

          <div className=" w-[50%] h-full">
            <h1 className=" text-red-500 text-center mt-28 font-semibold text-3xl">
              {" "}
              LogIn to your Account
            </h1>
            <p className=" text-red-500 text-center mt-4 font-normal text-sm">
              Be a Hero for someone. We welcome you hero.
            </p>

            <h1 className=" text-center text-red-500 text-xl mt-14 font-semibold">
              Email
            </h1>

            <input
              type="email"
              value={Email}
              placeholder="Enter Your Email"
              onChange={(event) => setEmail(event.target.value)}
              className=" w-80 ml-40 bg-red-400 h-8 border-b-red-600 rounded-md text-center text-white font-semibold "
            />

            <h1 className=" text-center text-red-500 text-lg mt-8 font-semibold">
              Password
            </h1>

            <input
              type="password"
              value={Password}
              placeholder="Enter Your Password"
              onChange={(event) => setPassword(event.target.value)}
              className=" w-80 ml-40 bg-red-400 h-8 border-b-red-600 rounded-md text-center text-white font-semibold "
            />
            <div className=" flex justify-center mt-5">
              <button className=" bg-orange-500 w-36 font-semibold rounded-md text-white hover:bg-orange-400 h-8">
                LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
