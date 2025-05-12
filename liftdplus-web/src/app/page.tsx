"use client";

import Image from "next/image";
import HomeComponent from "@/components/Home";
import ProfileExample from "@/components/ProfileExample";

export default function Home() {
  return (
    <div>
          <HomeComponent />
          <a href="/auth/login">LOGIN</a>
          <a href="/auth/logout">Logout</a>
          <ProfileExample />
    </div>
  );
}
