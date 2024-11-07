import { Logo } from "@/icons/logo";
import { FooterForm } from "./footer-form";
import { Facebook, Linkedin, X } from "@/icons/social-media";
import { NavList } from "@/assets/NavList";
import Link from "next/link";
import { formatString } from "@/utils";

export const FooterSection = () => {
  return (
    <footer className="bg-dark  px-5 pt-12 pb-8 lg:bg-transparent lg:px-12  xl:px-24 ">
      <div className="text-white flex justify-center flex-col items-center gap-9 lg:bg-dark  lg:rounded-t-[45px] lg:py-12 lg:px-16 lg:gap-16">
        <div className="flex gap-9 flex-col lg:flex-row lg:justify-between lg:w-full items-center">
          <Logo className="fill-white w-36" />
          <div className="flex flex-col lg:flex-row lg:gap-10 gap-4 text-center">
            {NavList.map((item) => (
              <Link
                className="lg:border-b hover:lg:border-b-green lg:hover:text-green"
                key={item.id}
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-x-5 hidden lg:flex">
            <a href="">
              <Linkedin className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white " />
            </a>
            <a href="">
              <Facebook className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white" />
            </a>
            <a
              href="
            "
            >
              <X className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white" />
            </a>
          </div>
        </div>
        <div className="lg:flex gap-9 lg:space-y-0 flex-col justify-center space-y-9 text-center lg:flex-row lg:justify-between lg:w-full">
          <div className="lg:flex gap-9 lg:space-y-0 flex-col justify-center space-y-9 text-center">
            <h3 className="text-black font-bold px-2 bg-green rounded-lg max-w-28 mx-auto lg:mx-0">
              Contact us:
            </h3>

            <div className="space-y-4 text-center lg:text-left">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p className="text-balance">
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <FooterForm />
        </div>

        <div className="space-x-5 lg:hidden">
        <a href="">
              <Linkedin className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white " />
            </a>
            <a href="">
              <Facebook className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white" />
            </a>
            <a
              href="
            "
            >
              <X className="inline-block size-8 transition ease-in-out delay-150 hover:fill-green  hover:-translate-y-1 hover:scale-110  duration-300 fill-white" />
            </a>
        </div>
        <hr className="h-1 text-white w-full" />
        <div className="space-y-4 text-center lg:text-left lg:w-full lg:space-x-10 lg:space-y-0">
          <p className="lg:inline-block">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <p className="lg:inline-block  lg:border-b">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
