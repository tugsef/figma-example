import { Label } from "@/components/label";
import { ServiceCard } from "@/app/_compponent/service-card";
import { ProposalCard } from "./proposal-card";

export const ServicesSection = () => {
  return (
    <section>
      <div className="space-y-16 lg:space-y-24">
        <div className="space-y-10 lg:space-y-20">
          <div className="text-center w-full space-y-8 lg:text-left lg:space-y-0 lg:space-x-10">
            <Label className="bg-green text-4xl lg:inline-block">
              Services
            </Label>
            <p className="text-center text-balance lg:inline-block lg:max-w-lg lg:text-left">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
          <ServiceCard />
        </div>
        <ProposalCard />
      </div>
      <div id="use_cases"> </div>

    </section>
  );
};
