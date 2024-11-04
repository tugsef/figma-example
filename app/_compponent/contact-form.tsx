import { ButtonVariant } from "@/components/button-variant";
import { IconButton } from "@/components/icon-button";
import { Illustration } from "@/icons/illustration";
import { Radius } from "@/icons/radio-icon";

export const ContactForm = () => {
  return (
    <div className="lg:flex lg:justify-between lg:w-full  md:gap-10  lg:bg-gray lg:rounded-[45px] lg:pt-14 lg:pb-20 lg:pl-16">
      <div className="space-y-8 md:min-w-96 lg:min-w-[633px]">
        <div className="bg-gray py-10 px-8 rounded-[45px] space-y-14 lg:px-0 lg:py-0">
          <div className="flex justify-between px-5 lg:justify-start lg:gap-9 lg:px-0">
            <IconButton className="flex items-center gap-4">
              <Radius className="fill-green inline-block" />
              <span>Say Hi</span>
            </IconButton>
            <IconButton className="flex items-center gap-4">
              <Radius className="fill-white inline-block" />
              <span>Get a Quote</span>
            </IconButton>
          </div>
          <form action="" className="space-y-5 lg:space-y-14">
            <div className="space-y-2">
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl py-4 px-5 w-full border border-black"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="" className="block">
                Email*
              </label>
              <input
                type="text"
                placeholder="Email"
                className="rounded-2xl py-4 px-5 w-full border border-black"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="" className="block">
                Message*
              </label>
              <textarea
                placeholder="Message"
                className="rounded-2xl py-4 px-5 w-full border border-black h-32"
              />
            </div>
          </form>
        </div>
        <ButtonVariant variant="dark" className="w-full">
          Send Message
        </ButtonVariant>
      </div>
      <Illustration className="fill-transparent hidden lg:block " />
    </div>
  );
};
