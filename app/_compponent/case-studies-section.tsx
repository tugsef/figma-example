import { IconButton } from "@/components/icon-button";
import { Label } from "@/components/label";
import { Arrow } from "@/icons/arrow";

export const CaseStudiesSection = () => {
  return (
    <section className="space-y-10 lg:space-y-20">
      <div className="space-y-8 text-center lg:text-left lg:space-y-0 lg:space-x-10">
        <Label className="bg-green text-4xl lg:inline-block">
          Case Studies
        </Label>
        <p className="text-balance lg:inline-block lg:max-w-lg lg:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex flex-row space-x-4 overflow-x-auto snap-x snap-mandatory lg:space-x-0 lg:overflow-hidden lg:p-16 lg:bg-dark lg:rounded-[45px]">
        <article className="bg-dark w-[350px] lg:w-auto rounded-[45px] p-10 space-y-6 snap-start flex-shrink-0 lg:flex-shrink lg:p-0 lg:pr-16">
          <p className="text-balance text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <IconButton>
            <label className="text-green">Learn more</label>
            <Arrow
              circleClass="fill-transparent"
              arrowClass="fill-green"
              className="inline-block"
            />
          </IconButton>
        </article>
        <div className="hidden lg:block w-1 h-full  bg-red-500 " />

        <article className="bg-dark w-[350px] lg:w-auto  rounded-[45px] p-10 space-y-6 snap-start flex-shrink-0 lg:flex-shrink border-x lg:rounded-none lg:p-0 lg:px-16">
          <p className="text-balance text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <IconButton>
            <label className="text-green">Learn more</label>
            <Arrow
              circleClass="fill-transparent"
              arrowClass="fill-green"
              className="inline-block"
            />
          </IconButton>
        </article>

        <article className="bg-dark w-[350px] lg:w-auto  rounded-[45px] p-10 space-y-6 snap-start flex-shrink-0 lg:flex-shrink lg:p-0 lg:pl-16">
          <p className="text-balance text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <IconButton>
            <label className="text-green">Learn more</label>
            <Arrow
              circleClass="fill-transparent"
              arrowClass="fill-green"
              className="inline-block"
            />
          </IconButton>
        </article>

        {/* Diğer kartlar burada eklenebilir */}
      </div>
    </section>
  );
};
