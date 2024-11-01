import { Label } from "@/components/label";
import { TestimonialsCard } from "./testimonials-card";
import { IconButton } from "@/components/icon-button";
import { Arrow } from "@/icons/arrow";
import { SelectiveIcon } from "@/icons/selective-icon";


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
       
        <div className="bg-dark rounded-[45px] px-8 pt-8 pb-16 space-y-14">
          <TestimonialsCard />
         <div className="flex justify-between items-center">
         <IconButton>
            <Arrow className="-rotate-[150deg]" circleClass="hidden" arrowClass="fill-white/30" />
            </IconButton>
            <div className="flex gap-5">
                <SelectiveIcon className="fill-green"/>
                <SelectiveIcon className="fill-white"/>
                <SelectiveIcon className="fill-white"/>
                <SelectiveIcon className="fill-white"/>
                <SelectiveIcon className="fill-white"/>
            </div>
            <IconButton>
            <Arrow className="rotate-[30deg]" circleClass="hidden" arrowClass="fill-white" />
            </IconButton></div>
        </div>
    
      </div>
    </section>
  );
};
