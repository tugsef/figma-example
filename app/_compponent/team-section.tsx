import { Button, Label } from "@/components/label";
import { TeamCard } from "./team-card";
import { TeamItemList } from "@/assets/TeamCarsItemList";
import { ButtonVariant } from "@/components/button-variant";

export const TeamSection = () => {
  return (
    <section>
      <div className="space-y-10">
        <div className="text-center w-full space-y-8">
          <Label className="bg-green text-4xl">Team</Label>
          <p className="text-center text-balance">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="space-y-8">
          {TeamItemList.map((card, index) => (
            <TeamCard card={card} key={index} />
          ))}
          <ButtonVariant variant="dark" className="w-full">
            See all team
          </ButtonVariant>
        </div>
      </div>
    </section>
  );
};
