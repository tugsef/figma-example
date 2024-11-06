import { NavList } from "@/assets/NavList";
import { ButtonVariant } from "@/components/button-variant";
import { BurgerMenu } from "@/icons/burger-menu";
import { Logo } from "@/icons/logo";
import { cn } from "@/lib/utils";
import { formatString } from "@/utils";
import Link from "next/link";

export const HeaderSection = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo className="h-6 w-36 lg:h-12 lg:w-56 " />

      <div className="lg:flex lg:gap-4  xl:gap-10 hidden justify-center items-center">
        {NavList.map((item) => (
          <Link
            className="relative group hover:font-bold px-1"
            key={item.id}
            href={`#${formatString(item.name)}`}
          >
            {item.name}
            <span
              className={cn(
                "inline-block h-full -z-10 group-hover:rounded-sm    absolute left-0   group-hover:w-full  ease duration-300 w-0 bg-green"
              )}
            >
              &nbsp;
            </span>
          </Link>
        ))}

        <ButtonVariant variant="transparent" className="tracking-wider">Request a quote</ButtonVariant>
      </div>

      <BurgerMenu className="lg:hidden" />
    </nav>
  );
};
