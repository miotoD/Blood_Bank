import React from "react";
import PrimaryNav from "../../Components/Headers/PrimaryNav";

function Register() {
  return (
    <>
      <PrimaryNav />
      <div className=" w-full h-screen flex">
        <div className=" w-[50%] h-screen">
          <h1 className=" text-3xl text-center mt-32 font-bold text-red-600">
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
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-64 ml-48 text-center text-white font-semibold rounded-md"
            />

            <p className=" text-red-600 font-semibold text-center text-lg mt-6">
              Email
            </p>
            <input
              type="email"
              name="firstname"
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-64 ml-48 text-center text-white font-semibold rounded-md"
            />

            <p className=" text-red-600 font-semibold text-center text-lg mt-6">
              Password
            </p>
            <input
              type="password"
              name="firstname"
              id="firstname"
              className=" border-b-2 border-red-600 bg-red-600 w-64 ml-48 text-center text-white font-semibold rounded-md "
            />

            <div className=" flex justify-center mt-8">
              <button className=" bg-orange-500 w-36 font-semibold rounded-md text-white hover:bg-orange-400">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[50%]  h-screen">
          <img src="/why.jpeg" alt="background" className="  w-full" />
        </div>
      </div>
    </>
  );
}

export default Register;
