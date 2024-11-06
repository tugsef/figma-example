import { CircularText } from "@/icons/circular-text";
import Link from "next/link";

export const HireMe = () => {
    return (
      <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center 
      overflow-hidden z-20">
        <div className="w-24 h-auto flex items-center justify-center relative md:w-48">
          <CircularText
            className={"fill-dark animate-spin-slow "}
          />
          <Link
            href="mailto:sefa.demirtas91@gmail.com"
            className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border 
            bg-green rounded-full text-dark w-12 h-12 font-semibold hover:bg-transparent hover:border-black  dark:hover:bg-dark
            dark:hover:text-light dark:hover:border-dark dark:shadow-light/25 md:w-20 md:h-20 md:text-[10px]
            "
                   
          >
         Hire Me
          </Link>
        </div>
      </div>
    );
  };
  