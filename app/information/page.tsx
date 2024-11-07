import HyperText from "@/components/ui/hyper-text";
import { Link } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen bg-green text-2xl lg:text-5xl tracking-widest flex justify-center items-center flex-col  font-semibold">
    <HyperText
    text="Coming Soon"
/> 
  <Link
    href="/"
    className="font-light text-xs  hover:border-b border-dark"

  >
    <HyperText
    text="Home Page"
    className="cursor-pointer"/>
    
  </Link>
</div>
  );
}

export default page;
