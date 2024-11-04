import {
  Amazon,
  Dribble,
  HubSpot,
  Netflix,
  Notion,
  Zoom,
} from "@/icons/company-logo";
import { MarqueeCompany } from "./company-animate";

export const CompanyLogoSection = () => {
  return (
    <section>
      <div className="overflow-hidden filter  grayscale">
        <MarqueeCompany />
      </div>
      <div id="services"> </div>
    </section>
  );
};
