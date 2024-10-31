import { Label } from "@/components/label";
import { ServiceCard } from "@/app/_compponent/service-card";
import { ProposalCard } from "./proposal-card";

export const ServicesSection = () => {
  return (
    <section>
      <div className="space-y-16">
      <div className="space-y-10">
        <div className="text-center w-full space-y-8">
          <Label className="bg-green text-4xl">Services</Label>
          <p className="text-center text-balance">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <ServiceCard />
      </div>

        <ProposalCard/>
      </div>
 
    </section>
  );
};
