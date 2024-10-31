import { IconButton } from "@/components/icon-button";
import { Label } from "@/components/label";
import { Arrow } from "@/icons/arrow";

export const CaseStudiesSection = () => {
  return (
    <section className="space-y-10">
      <div className="space-y-8 text-center">
        <Label className="bg-green text-4xl">Case Studies</Label>
        <p className="text-balance">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="flex flex-row space-x-4 overflow-x-auto snap-x snap-mandatory">
  <article className="bg-dark w-[350px] rounded-[45px] p-10 space-y-6 snap-start flex-shrink-0">
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

  <article className="bg-dark w-[350px] rounded-[45px] p-10 space-y-6 snap-start flex-shrink-0">
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
