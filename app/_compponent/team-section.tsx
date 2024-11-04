import { Label } from "@/components/label";
import { TeamCard } from "./team-card";
import { TeamItemList } from "@/assets/TeamCarsItemList";
import { ButtonVariant } from "@/components/button-variant";
import { Linkedin } from "@/icons/linkedin-logo";
import { TeamPhoto } from "@/icons/team-card-picture";

export const TeamSection = () => {
  return (
    <section>
      <div className="space-y-10 lg:space-y-20">
        <div className="text-center w-full space-y-8 lg:text-left lg:space-y-0 lg:space-x-10">
          <Label className="bg-green text-4xl  lg:inline-block lg:max-w-lg">
            Team
          </Label>
          <p className="text-center text-balance lg:inline-block lg:max-w-lg lg:text-left">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:space-y-0">
          {TeamItemList.map((card, index) => (
            <TeamCard card={card} key={index} />
          ))}

          <article className="number py-10 px-9 rounded-[45px] border border-dark border-b-4 space-y-5 hidden lg:block">
            <div className="flex gap-5 relative items-end">
              <TeamPhoto imageSrc="https://picsum.photos/200/300" />

              <div className=" space-y-1">
                <h4 className="font-medium">Brian Williams</h4>
                <p className="text-sm">
                  Social Media <br /> Specialist
                </p>
              </div>

              <Linkedin className="absolute right-0 top-0" />
            </div>

            <div className="border border-dark" />
            <p className="text-balance">
              4+ years of experience in social media marketing. Proficient in
              creating and scheduling content, analyzing metrics, and building
              engagement
            </p>
          </article>

          <article className="number py-10 px-9 rounded-[45px] border border-dark border-b-4 space-y-5 hidden lg:block">
            <div className="flex gap-5 relative items-end">
              <TeamPhoto imageSrc="https://picsum.photos/200/300" />

              <div className=" space-y-1">
                <h4 className="font-medium">Sarah Kim</h4>
                <p className="text-sm">Content Creator</p>
              </div>

              <Linkedin className="absolute right-0 top-0" />
            </div>

            <div className="border border-dark" />
            <p className="text-balance">
              2+ years of experience in writing and editing Skilled in creating
              compelling, SEO-optimized content for various industries
            </p>
          </article>
        </div>
        <div className="text-right">
          <ButtonVariant variant="dark" className="w-full lg:w-auto">
            See all team
          </ButtonVariant>
        </div>
      </div>
    </section>
  );
};
