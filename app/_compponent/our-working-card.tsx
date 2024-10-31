import { OurWorkingCardItem } from "@/assets/OurWorkingCardItemList";
import { IconButton } from "@/components/icon-button";
import { Increase } from "@/icons/increase";



type OurWorkingCardProps = {
  card: OurWorkingCardItem;
};

export const OurWorkingCard = ({ card }: OurWorkingCardProps) => {
  return (
    <article className="p-8 border border-dark border-b-4 rounded-[45px] bg-gray">
      <div className="flex items-center gap-8 ">
        <h1 className="text-2xl font-medium">{card.number}</h1>
        <p className="text-sm  font-medium text-balance w-full">
          {card.content}
        </p>
        <IconButton>
          <Increase className="size-8" />
        </IconButton>
      </div>
    </article>
  );
};
