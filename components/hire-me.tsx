import { CircularText } from "@/icons/circular-text";
import Link from "next/link";

export const HireMe = () => {
    return (
      <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center 
      overflow-hidden z-20 rounded-full  backdrop-blur-md">
        <div className="w-16 h-16  flex items-center justify-center relative md:w-44 md:h-44 bg-white/50">
          <CircularText
            className={"fill-dark animate-spin-slow "}
          />
          <Link
            href="mailto:sefa.demirtas91@gmail.com"
            className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border 
            bg-green rounded-full text-dark w-12 h-12 font-semibold   text-xs
           md:w-20 md:h-20 md:text-[10px]"  
          >
         Hire Me
          </Link>
        </div>
      </div>
    );
  };
  