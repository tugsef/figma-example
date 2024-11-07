import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen bg-green text-xl lg:text-5xl tracking-widest flex justify-center items-center flex-col gap-4 font-semibold">
      <h1>Coming Soon</h1>
      <Link
        href="/"
        className="text-dark/50 font-light  lg:text-xl hover:border-b border-dark"
      >        Home Page
      </Link>
    </div>
  );
}

export default page;
