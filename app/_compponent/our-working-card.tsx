import { OurWorkingCardItems } from "@/assets/OurWorkingCardItemList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const OurWorkingCardList = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-5">
      {OurWorkingCardItems.map((card, index) => (
        <AccordionItem key={index} value={card.number}>
          <AccordionTrigger>
            {" "}
            <h1 className="text-2xl font-medium">{card.number}</h1>
            <p className="text-sm  font-medium text-balance w-full text-left">
              {card.content}
            </p>
          </AccordionTrigger>
          <AccordionContent>{card.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
