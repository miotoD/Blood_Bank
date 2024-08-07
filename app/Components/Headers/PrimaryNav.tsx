import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import context from "../../page";

export default function MyComponent() {
  const [token, setToken] = useState("");

  function handleLogout() {
    localStorage.removeItem("accessToken");
  }

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);
  return (
    <div>
      <div className="pNav w-full bg-black h-20 flex justify-center  items-center font-semibold Playwrite BE VLS border-b-white border-2px">
        <ul className=" flex gap-36 text-red-500 text-md ml-40  w-[700px] ">
          <Link href="/">
            <ul className=" hover:cursor-pointer">Home</ul>{" "}
          </Link>
          <ul className=" hover:cursor-pointer">About Us</ul>
          <Link href="/Page/RequestBlood">
            <ul className=" hover:cursor-pointer">Request Blood</ul>
          </Link>
        </ul>
        {token ? (
          <div className=" flex justify-end  w-[540px] mr-24">
            <ul className=" flex gap-9 text-white hover:cursor-pointer  ">
              <Link href="/Page/Profile">
                {" "}
                <ul>Profile</ul>{" "}
              </Link>

              <Link href="/Page/Register">
                <button onClick={handleLogout}>Logout</button>{" "}
              </Link>
            </ul>
          </div>
        ) : (
          <div className=" flex justify-end  w-[540px] mr-24">
            <ul className=" flex gap-9 text-white hover:cursor-pointer  ">
              <Link href="/Page/Login">
                {" "}
                <ul>Login</ul>{" "}
              </Link>

              <Link href="/Page/Register">
                <ul>Register</ul>{" "}
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
