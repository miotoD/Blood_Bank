import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyComponent() {
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

        <div className=" flex justify-end  w-[540px] mr-24">
          <ul className=" flex gap-9 text-white hover:cursor-pointer  ">
            <Link href="/Page/Login">
              {" "}
              <ul>Profile</ul>{" "}
            </Link>

            <button>
              <ul>Logout</ul>{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
