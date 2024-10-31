import { ButtonVariant } from "@/components/button-variant";
import { Button } from "@/components/label";
import { Hero } from "@/icons/hero";

export const HeroSection = () => {
  return (
    <section className="space-y-3">
      <h1 className="text-4xl text-balance font-medium">
        Navigating the digital landscape for success
      </h1>
      <div className="space-y-10">
        <div className="space-y-5">
          <Hero className="w-full" />
          <p className="text-balance">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </div>

        <ButtonVariant variant="dark" className="w-full">
          Book a consultation
        </ButtonVariant>
      </div>
    </section>
  );
};
