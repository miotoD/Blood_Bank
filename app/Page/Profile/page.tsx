"use client";

import React, { useEffect, useState } from "react";
import PrimaryNav from "../../Components/Headers/PrimaryNav";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);

    if (!token) {
      router.push("/Page/Login");
      alert("Please LogIn first");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className=" h-screen w-full">
      <PrimaryNav />

      <div>{isLoading ? "Loading......" : "This is the profile page"}</div>
    </div>
  );
}

export default Profile;
