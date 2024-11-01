import { Logo } from "@/icons/logo";
import { FooterForm } from "./footer-form";
import { Facebook, Linkedin, X } from "@/icons/social-media";

export const FooterSection = () => {
  return (
    <footer className="bg-dark py-8 px-5 pt-12">
      <div className="text-white flex justify-center flex-col items-center gap-9">
        <Logo className="fill-white w-36 " />
        <div className="flex flex-col gap-4 text-center">
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Use Cases</a>
          <a href="">Pricing</a>
        </div>
        <h3 className="text-black font-bold px-2 bg-green rounded-lg">
          Contact us:
        </h3>
        <div className="space-y-4 text-center">
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p className="text-balance">
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <FooterForm />

        <div className="space-x-5">
          <Linkedin className="inline-block size-8 " />
          <Facebook className="inline-block size-8" />
          <X className="inline-block size-8" />
        </div>
        <hr className="h-1 text-white w-full" />
        <div className="space-y-4 text-center">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
