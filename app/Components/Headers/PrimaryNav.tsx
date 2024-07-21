import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyComponent() {
  return (
    <div>
      <div className="pNav w-full bg-red-400 h-20 flex justify-center  items-center font-semibold Playwrite BE VL">
        <ul className=" flex gap-9 text-white  ml-64 -mr-60 ">
          <ul className=" hover:cursor-pointer">Home</ul>
          <ul className=" hover:cursor-pointer">About Us</ul>
          <ul className=" hover:cursor-pointer">Request Blood</ul>
        </ul>

        <div className=" flex justify-end  w-[540px] ml-36">
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
      </div>
    </div>
  );
}
