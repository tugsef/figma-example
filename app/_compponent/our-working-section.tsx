import { IconButton } from "@/components/icon-button";
import { Label } from "@/components/label";
import { Increase } from "@/icons/increase";
import { OurWorkingCard } from "./our-working-card";
import { OurWorkingCardItems } from "@/assets/OurWorkingCardItemList";

export const OurWorkingSection = () => {
  {
    return (
      <section>
        <div className="space-y-8">
          <div className="text-center">
            <Label className="bg-green text-4xl inline-block">
              Our Working
            </Label>
            <br />
            <Label className="bg-green text-4xl inline-block">Process</Label>
          </div>

          <p className="text-balance text-center">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>

          <div className="space-y-5">
            {
                OurWorkingCardItems.map((card,index)=><OurWorkingCard key={index} card={card}/>)
            }
         
          </div>
        </div>
      </section>
    );
  }
};
