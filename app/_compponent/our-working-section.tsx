import { Label } from "@/components/label";
import { OurWorkingCardList } from "./our-working-card";

export const OurWorkingSection = () => {
  {
    return (
      <section>
        <div className="space-y-10 lg:space-y-20">
          <div className="space-y-8 lg:flex lg:gap-10 lg:space-y-0">
          <div className="text-center lg:bg-green lg:rounded-sm">
            <Label className="bg-green text-4xl inline-block">
              Our Working
            </Label>
            <br className="lg:hidden"/>
            <Label className="bg-green text-4xl inline-block">Process</Label>
          </div>

          <p className="text-balance text-center lg:text-left lg:max-w-sm">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
          </div>
         
          <OurWorkingCardList />
        </div>
      </section>
    );
  }
};
