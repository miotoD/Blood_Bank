import React from "react";
import PrimaryNav from "./Components/Headers/PrimaryNav";
import Link from "next/link";
import Footer from "./Components/Footers/Footer";

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
          <Link href="/Page/RequestBlood">
            <li className="relative hover:cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 hover:before:scale-x-100">
              Request Blood
            </li>
          </Link>
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
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            corrupti modi autem, eligendi maiores animi amet beatae voluptatum
            deserunt distinctio recusandae qui nulla molestias placeat ipsa
            voluptas maxime facilis asperiores.
          </p>
        </div>
        <div
          className=" w-[50%] h-full bg-violet-500 bg-cover bg-center"
          style={{ backgroundImage: "url('/mids.jpg')" }}
        ></div>
      </div>

      <div className=" secMidSec  w-full h-64 mt-12 flex px-5">
        <div
          className=" bg-blue-500 w-[50%] h-full bg-cover bg-center rounded-2xl "
          style={{ backgroundImage: "url('/midsec.jpg')" }}
        ></div>
        <div className=" bg-[#FFBDBD] w-[50%] h-full rounded-[40px] p-8">
          <p className=" text-black font-semibold text-lg ">
            In developing countries like NEPAL,patients families have the burden
            and stress of managing and transporting blood themselves.
          </p>
          <h1 className=" text-red-600 font-semibold text-2xl text-center mt-4">
            We are on a mission to change that.
          </h1>
        </div>
      </div>

      <div className=" mt-28 w-full h-20 bg-red-500 flex items-center justify-center ">
        <h1 className=" text-white font-semibold text-2xl">
          Blood Organizations in Nepal
        </h1>
      </div>

      <div className=" w-full h-80 flex px-16 gap-4 mt-7">
        <div
          className=" w-96 h-full bg-cover bg-center "
          style={{ backgroundImage: "url('/bo.jpeg')" }}
        ></div>
        <div
          className=" w-96 h-full bg-blue-400 bg-cover bg-center"
          style={{ backgroundImage: "url('/bo.jpeg')" }}
        ></div>

        <div
          className=" w-96 h-full bg-red-400 bg-center bg-cover"
          style={{ backgroundImage: "url('/bo.jpeg')" }}
        ></div>
      </div>
      <Footer />
    </>
  );
}

export default page;
