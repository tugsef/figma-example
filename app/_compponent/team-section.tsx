import { Label } from "@/components/label";
import { TeamCard } from "./team-card";
import { TeamItemList } from "@/assets/TeamCarsItemList";
import { ButtonVariant } from "@/components/button-variant";
import { Linkedin } from "@/icons/linkedin-logo";
import { TeamPhoto } from "@/icons/team-card-picture";
import Link from "next/link";

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
          {TeamItemList.map((card) => (
              <TeamCard
                card={card}
                className="shadow-none transition-shadow duration-300 cursor-pointer  hover:shadow-lg hover:shadow-dark"
              />
          ))}
            <article className="number py-10 px-9 rounded-[45px] border border-dark border-b-4 space-y-5 hidden lg:block shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-dark">
            <Link href="/information">

              <div className="flex gap-5 relative items-end">

                <TeamPhoto imageSrc="/image/image5.png" />

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
              </Link>
            </article>
          
          <Link href="/information">
            <article className="number py-10 px-9 rounded-[45px] border border-dark border-b-4 space-y-5 hidden lg:block cursor-pointer hover:shadow-lg hover:shadow-dark">
              <div className="flex gap-5 relative items-end">
                <TeamPhoto imageSrc="/image/image6.png" />

                <div className=" space-y-1">
                  <h4 className="font-medium">Sarah Kim</h4>
                  <p className="text-sm">Content Creator</p>
                </div>

                <Linkedin className="absolute right-0 top-0" />
              </div>

              <div className="border border-dark" />
              <p className="text-balance">
                2+ years of experience in writing and editing Skilled in
                creating compelling, SEO-optimized content for various
                industries
              </p>
            </article>
          </Link>
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
