import { IconButton } from "@/components/icon-button";
import { Arrow } from "@/icons/arrow";
import {
  ServiceCardLogoAnalytics,
  ServiceCardLogoContent,
  ServiceCardLogoEmail,
  ServiceCardLogoPay,
  ServiceCardLogoSearch,
} from "@/icons/service-card-logo";
import Link from "next/link";

export const ServiceCard = () => {
  return (
    <section className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 gap-10 grid-flow-row">
      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-gray space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <h2 className="bg-green text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Search engine
          </h2>
          <br />
          <h2 className="bg-green text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            optimization
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
            <span className="hidden lg:block text-sm">Learn more</span>
          </Link>

          <ServiceCardLogoSearch className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-green space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <h2 className="bg-white text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Pay-per-click
          </h2>
          <br />
          <h2 className="bg-white text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            advertising
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
            <span className="hidden lg:block text-sm">Learn more</span>
          </Link>{" "}
          <ServiceCardLogoPay className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-dark space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <div className="bg-white text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Social Media
          </div>
          <br />
          <div className="bg-white text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            Marketing
          </div>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-black" circleClass="fill-white" />
            <span className="hidden lg:block text-sm text-white">
              Learn more
            </span>
          </Link>{" "}
          <ServiceCardLogoPay className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-gray space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <h2 className="bg-green text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Email
          </h2>
          <br />
          <h2 className="bg-green text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            Marketing
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
            <span className="hidden lg:block text-sm">Learn more</span>
          </Link>
          <ServiceCardLogoEmail className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-green space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <h2 className="bg-white text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Content{" "}
          </h2>
          <br />
          <h2 className="bg-white text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            Creation
          </h2>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-green" circleClass="fill-black" />
            <span className="hidden lg:block text-sm">Learn more</span>
          </Link>
          <ServiceCardLogoContent className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>

      <article className="p-12 border border-dark rounded-[45px] border-b-4 bg-dark space-y-7 relative lg:flex flex-col justify-between gap-24 cursor-pointer lg:hover:animate-tada">
        <div>
          <div className="bg-white text-lg lg:text-3xl px-2 font-medium rounded-lg inline-block">
            Analytics and{" "}
          </div>
          <br />
          <div className="bg-white text-lg lg:text-3xl px-2 font-medium  rounded-lg inline-block">
            Tracking
          </div>
        </div>
        <div className="flex items-end justify-between">
          <Link href="/information" className="lg:flex gap-3 items-center">
            <Arrow arrowClass="fill-black" circleClass="fill-white" />
            <span className="hidden lg:block text-sm text-white">
              Learn more
            </span>
          </Link>
          <ServiceCardLogoAnalytics className="lg:size-52 lg:absolute  lg:top-1/2 lg:right-12 lg:transform  lg:-translate-y-1/2" />
        </div>
      </article>
    </section>
  );
};
