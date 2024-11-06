import { ButtonVariant } from "@/components/button-variant";
import { Button } from "@/components/label";
import { Hero } from "@/icons/hero";

export const HeroSection = () => {
  return (
    <section className="flex justify-between relative">
      <div className="space-y-3 lg:space-y-9 lg:max-w-lg">
        <h1 className="text-4xl lg:text-6xl text-balance font-medium lg:leading-tight tracking-tight">
          Navigating the digital landscape for success
        </h1>
        <div className="space-y-10">
          <div className="space-y-5">
            <Hero className="w-full lg:hidden" />
            <p className="text-balance lg:leading-6 animate-fade-up animate-infinite animate-ease-out animate-alternate-reverse">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>

          <ButtonVariant variant="dark" className="w-full md:w-auto">
            Book a consultation
          </ButtonVariant>
        </div>
      </div>
      <Hero className="hidden lg:block max-w-screen-sm" />
    </section>
  );
};
