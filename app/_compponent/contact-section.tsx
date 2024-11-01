import { Label } from "@/components/label"
import { ContactForm } from "./contact-form"

export const ContactSection = () =>{

    return    <section>
    <div className="space-y-10">
      <div className="space-y-8 text-center">
        <Label className="bg-green text-4xl">Contact Us</Label>

        <p className="text-center text-balance">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      
      <ContactForm/>
       </div>
    </section>

}