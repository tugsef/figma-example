import { IconButton } from "@/components/icon-button";
import { Arrow } from "@/icons/arrow";
import {
  ServiceCardLogoAnalytics,
  ServiceCardLogoContent,
  ServiceCardLogoEmail,
  ServiceCardLogoPay,
  ServiceCardLogoSearch,
} from "@/icons/service-card-logo";

export const ServiceCard = () => {
  return (
    <section className="space-y-8">
      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-gray space-y-7">
        <div>
          <h2 className="bg-green text-lg px-2 font-medium rounded-lg inline-block">
            Search engine
          </h2>
          <br />
          <h2 className="bg-green text-lg px-2 font-medium  rounded-lg inline-block">
            optimization
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
          </IconButton>

          <ServiceCardLogoSearch />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-green space-y-7">
        <div>
          <h2 className="bg-white text-lg px-2 font-medium rounded-lg inline-block">
            Pay-per-click
          </h2>
          <br />
          <h2 className="bg-white text-lg px-2 font-medium  rounded-lg inline-block">
            advertising
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
          </IconButton>
          <ServiceCardLogoPay />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-dark space-y-7">
        <div>
          <div className="bg-white text-lg px-2 font-medium rounded-lg inline-block">
            Social Media
          </div>
          <br />
          <div className="bg-white text-lg px-2 font-medium  rounded-lg inline-block">
            Marketing
          </div>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-black" circleClass="fill-white" />
          </IconButton>
          <ServiceCardLogoPay />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-gray space-y-7">
        <div>
          <h2 className="bg-green text-lg px-2 font-medium rounded-lg inline-block">
            Email
          </h2>
          <br />
          <h2 className="bg-green text-lg px-2 font-medium  rounded-lg inline-block">
            Marketing
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
          </IconButton>
          <ServiceCardLogoEmail />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-green space-y-7">
        <div>
          <h2 className="bg-white text-lg px-2 font-medium rounded-lg inline-block">
            Content{" "}
          </h2>
          <br />
          <h2 className="bg-white text-lg px-2 font-medium  rounded-lg inline-block">
            Creation
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
          </IconButton>
          <ServiceCardLogoContent />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-dark space-y-7">
        <div>
          <div className="bg-white text-lg px-2 font-medium rounded-lg inline-block">
            Analytics and{" "}
          </div>
          <br />
          <div className="bg-white text-lg px-2 font-medium  rounded-lg inline-block">
            Tracking
          </div>
        </div>
        <div className="flex items-end justify-between">
          <IconButton>
            <Arrow arrowClass="fill-black" circleClass="fill-white" />
          </IconButton>
          <ServiceCardLogoAnalytics />
        </div>
      </article>
    </section>
  );
};
