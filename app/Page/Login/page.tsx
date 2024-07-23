import React from "react";
import PrimaryNav from "../../Components/Headers/PrimaryNav";
import { url } from "inspector";

function Login() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col">
        <PrimaryNav />
        <div className=" h-full flex-grow flex ">
          <div
            className=" w-[50%]  bg-blue-600 h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ></div>

          <div className=" w-[50%] h-full">
            <h1 className=" text-red-500 text-center mt-28 font-semibold text-2xl">
              {" "}
              LogIn to your Account
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
