import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyComponent() {
  return (
    <div>
      <div className="pNav w-full bg-red-400 h-20 flex justify-center  items-center font-semibold Playwrite BE VL">
        <ul className=" flex gap-9 text-white hover:cursor-pointer ml-64 -mr-60">
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Request Blood</ul>
        </ul>

        <div className=" flex justify-end  w-[540px] ml-36">
          <ul className=" flex gap-9 text-white hover:cursor-pointer  ">
            <Link href="/Login">
              {" "}
              <ul>Login</ul>{" "}
            </Link>
            <ul>Register</ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
