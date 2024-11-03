import Marquee from "@/components/ui/marquee";

import {
  Amazon,
  Dribble,
  HubSpot,
  Netflix,
  Notion,
  Zoom,
} from "@/icons/company-logo";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const reviews = [
  {
    name: "Amazon",
    icon: <Amazon />,
  },
  {
    name: "Amazon",
    icon: <Dribble />,
  },
  {
    name: "Amazon",
    icon: <HubSpot />,
  },
  {
    name: "Amazon",
    icon: <Netflix />,
  },
  {
    name: "Amazon",
    icon: <Notion />,
  },
  {
    name: "Amazon",
    icon: <Zoom />,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode | ReactNode[];
}) => {
  return (
    <figure
      className={cn(
        "cursor-pointer overflow-hidden",
        // light styles
        "hover:bg-gray-950/[.05]"
      )}
    >
      {icon}
    </figure>
  );
};

export const MarqueeCompany = () => {
  return (
    <div className="filter  grayscale relative   w-full  overflow-hidden md:shadow-xl">
    
      <Marquee
        pauseOnHover
        className="lg:[--duration:20s] lg:space-x-9 hidden lg:flex"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="lg:hidden space-y-10 ">
        <Marquee pauseOnHover className="[--duration:20s] space-x-9">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] space-x-9">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>

    </div>
  );
};
