import React from "react";
import PrimaryNavbar from "../../Components/Headers/PrimaryNav";

function RequestBlood() {
  return (
    <div className="h-screen">
      <PrimaryNavbar />
      <div
        className="relative h-full w-full bg-red-500 bg-cover bg-center"
        style={{ backgroundImage: "url('/image1.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold text-red-500"> Request Blood</h1>
          <p className="mt-4 text-lg">Fill the form and request on One Click</p>
        </div>
      </div>
    </div>
  );
}

export default RequestBlood;
