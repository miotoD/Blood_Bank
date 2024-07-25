import React from "react";

function Footer() {
  return (
    <div
      className=" bg-red-600 tetx-white h-44 w-full mt-4 flex py-8 px-72 bg-cover bg-center "
      style={{ backgroundImage: "url('/req-blood.avif')" }}
    >
      <div className=" h-full w-60 ">
        <ul className=" list text-white font-semibold hover:cursor-pointer text-sm ">
          <ul className=" hover:text-red-400">Home</ul>
          <ul className=" hover:text-red-400">About US</ul>
          <ul className=" hover:text-red-400">Contact</ul>
          <ul className=" hover:text-red-400">Request Blood</ul>
        </ul>
      </div>

      <div
        className="h-full w-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>
      <div className=" h-full w-72 ">
        <ul className=" list text-white font-semibold hover:cursor-pointer text-sm ml-36 ">
          <ul className=" hover:text-red-400">Blog</ul>
          <ul className=" hover:text-red-400">Become a Member</ul>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
