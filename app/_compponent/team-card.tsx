import { TeamItem } from "@/assets/TeamCarsItemList";
import { Linkedin } from "@/icons/linkedin-logo";
type TeamCardProps = {
    card: TeamItem;
  };
export const TeamCard = ({card}:TeamCardProps) => {
  return (
    <article className="py-10 px-9 rounded-[45px] border border-dark border-b-4 space-y-5">
      <div className="flex gap-5 relative items-end">
        {card.icon}

        <div className=" space-y-1">
          <h4 className="font-medium">{card.name}</h4>
          <p className="text-sm">{card.position}</p>
        </div>

        <Linkedin className="absolute right-0 top-0" />
      </div>

      <div className="border border-dark" />
      <p className="text-balance">
        {card.content}
      </p>
    </article>
  );
};
