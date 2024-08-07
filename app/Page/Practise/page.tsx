"use client";

import { clear } from "console";
import React from "react";
import { useState, useRef } from "react";

function Practise() {
  const [numbers, setNumbers] = useState("");

  const handleClick = (value) => {
    setNumbers((prevInput) => prevInput + value);
  };

  function clearAll() {
    setNumbers("");
  }

  function calculateResult() {
    setNumbers(eval(numbers));
  }

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className=" border-[2px] border-black h-96 w-80 px-4">
        <div className=" border-[2px] border-green-600 h-20 w-72 mt-4">
          {numbers}
        </div>
        <div className=" border-[2px]  h-72 flex">
          <div className=" border-[2px] border-black mt-8 h-56 w-48 p-2 flex flex-wrap gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <button
                className=" rounded-lg border-[1px] border-black w-9 hover:bg-black hover:text-white h-8"
                key={number}
                onClick={() => handleClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="  h-full w-fit py-4 ml-4 mt-4">
            {["+", "-", "/", "*"].map((symbol) => (
              <button
                key={symbol}
                className=" rounded-lg border-[1px] border-black w-9 hover:bg-black hover:text-white h-8 m-2"
                onClick={() => handleClick(symbol)}
              >
                {symbol}
              </button>
            ))}

            <button
              className="rounded-lg border-[1px] border-black w-9 hover:bg-black hover:text-white h-8 m-2"
              onClick={clearAll}
            >
              C
            </button>

            <button
              className="rounded-lg border-[1px] border-black w-9 hover:bg-black hover:text-white h-8 m-2"
              onClick={calculateResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practise;
