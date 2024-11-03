import { NavList } from "@/assets/NavList";
import { ButtonVariant } from "@/components/button-variant";
import { BurgerMenu } from "@/icons/burger-menu";
import { Logo } from "@/icons/logo";
import { formatString } from "@/utils";
import Link from "next/link";

export const HeaderSection = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo className="h-6 w-36 lg:h-12 lg:w-56 " />

      <div className="lg:flex md:gap-4  xl:gap-10 hidden justify-center items-center text-lg">
        {NavList.map((item) => (
          <Link key={item.id} href={`#${formatString(item.name)}`}>
            {item.name}
          </Link>
        ))}

        <ButtonVariant variant="transparent">Request a quote</ButtonVariant>
      </div>

      <BurgerMenu className="lg:hidden" />
    </nav>
  );
};
