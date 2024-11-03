import { ButtonVariant } from "@/components/button-variant";
import { Frame } from "@/icons/frame";

export const ProposalCard = () => {
  return (
    <article className="p-[50px] lg:p-16 space-y-5 lg:space-y-6 bg-gray rounded-[45px] relative ">
      <h3 className="font-medium text-balance text-xl">
        Let’s make things happen
      </h3>
      <p className="text-black max-w-lg text-balance">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>

      <ButtonVariant variant="dark" className="w-full lg:w-auto">
        Get your proposal
      </ButtonVariant>
      <Frame className="lg:absolute hidden lg:block -top-14 right-0 fill-transparent"/>
    </article>
  );
};
