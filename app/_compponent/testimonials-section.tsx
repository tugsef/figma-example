import { Label } from "@/components/label";
import EmblaCarousel from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export const TestimonialsSection = () => {
  return (
    <section>
      <div className="space-y-10">
        <div className="space-y-8 text-center">
          <Label className="bg-green text-4xl">Testimonials</Label>

          <p className="text-center text-balance">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
};
