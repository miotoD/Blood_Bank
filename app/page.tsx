import React from "react";
import PrimaryNav from "./Components/Headers/PrimaryNav";
import Link from "next/link";

function page() {
  return (
    <>
      <div
        className=" h-[540px] w-full bg-cover bg-center flex"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <ul className="text-red-500 h-fit font-semibold text-md flex gap-28 ml-44 py-5">
          <Link href="/">
            <li className="relative hover:cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 hover:before:scale-x-100">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="relative hover:cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 hover:before:scale-x-100">
              About Us
            </li>
          </Link>
          <li className="relative hover:cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 hover:before:scale-x-100">
            Request Blood
          </li>
        </ul>

        <div className="w-48 h-24 ml-96 ">
          <ul className=" text-white  font-semibold text-md h-fit flex gap-14 py-5 ">
            <Link href="/Page/Login">
              <ul className="hover:cursor-pointer">LogIn</ul>
            </Link>
            <Link href="/Page/Register">
              <ul className="hover:cursor-pointer">Register</ul>{" "}
            </Link>
          </ul>
        </div>
      </div>

      <div className="midSec h-80  w-full flex mt-20 px-7 py-3 ">
        <div className=" w-[50%] h-full">
          <h1 className=" text-3xl text-red-500 font-semibold ml-2 mt-2 ">
            Eliminate Blood Scarcity
          </h1>
          <p className=" text-md font-semibold px-4 py-3">
            in NEPAL by donating your time to make an impact, your blood to save
            lives or your money to create a holistic blood management cycle.
          </p>
        </div>
        <div
          className=" w-[50%] h-full bg-violet-500 bg-cover bg-center"
          style={{ backgroundImage: "url('/mids.jpg')" }}
        ></div>
      </div>
    </>
  );
}

export default page;
