import { Label } from "@/components/label";
import { OurWorkingCardList } from "./our-working-card";

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
          <OurWorkingCardList />
        </div>
      </section>
    );
  }
};
