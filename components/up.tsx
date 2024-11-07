"use client";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Up: React.FC = () => {
  const floatingDivRef = useRef<HTMLAnchorElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!floatingDivRef.current) return;
      const threshold = 50;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsActive(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Link
        ref={floatingDivRef}
        href={"#header"}
        className={`${
          isActive
            ? "fixed right-4 md:right-10 bottom-6 md:bottom-12   z-50 md:h-20 md:w-20  w-12 h-12 rounded-full bg-green flex justify-center items-center shadow-2xl  hover:shadow-green "
            : "hidden"
        }`}
      >
        <ArrowDown className="w-8 h-8 md:w-10 md:h-10  rotate-180    fill-transparent  text-black" />
      </Link>
    </div>
  ); 
};

export default Up;
