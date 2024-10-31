import { BurgerMenu } from "@/icons/burger-menu";
import { Logo } from "@/icons/logo";

export const HeaderSection = () => {
  return (
    <section className="flex justify-between">
      <Logo className="h-6 w-36" />
      <BurgerMenu />
    </section>
  );
};
