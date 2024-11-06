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
            ? "fixed bottom-4 right-4 lg:bottom-8 z-50 lg:right-8"
            : "hidden"
        }`}
      >
        <ArrowDown className="w-10 h-10 lg:w-14 rotate-180 bg-green lg:h-14  rounded-full shadow-2xl text-black dark:shadow-2xl hover:shadow-black" />
      </Link>
    </div>
  );
};

export default Up;