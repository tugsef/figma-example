import { Label } from "@/components/label";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  return (
    <section>
      <div className="space-y-10 lg:space-y-20">
        <div className="space-y-8 text-center lg:text-left lg:space-y-0 lg:space-x-10">
          <Label className="bg-green text-4xl lg:inline-block">Contact Us</Label>

          <p className="text-center text-balance lg:inline-block lg:max-w-sm lg:text-left">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
