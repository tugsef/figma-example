import { Amazon, Dribble } from "@/icons/company-logo";
import { HeaderSection } from "./_compponent/header-section";
import { HeroSection } from "./_compponent/hero-section";
import { CompanyLogoSection } from "./_compponent/company-logo-section";
import { ServicesSection } from "./_compponent/services-section";
import { CaseStudiesSection } from "./_compponent/case-studies-section";
import { OurWorkingSection } from "./_compponent/our-working-section";
import { TeamSection } from "./_compponent/team-section";
import { TestimonialsSection } from "./_compponent/testimonials-section";
import { ContactSection } from "./_compponent/contact-section";
import { FooterSection } from "./_compponent/footer-section";
import { HireMe } from "@/components/hire-me";

const Home = () => {
  return (
    <div id="about_us" className="min-h-screen grid grid-cols-1 relative">
      <div className="space-y-14 lg:space-y-20">
        <div className="lg:space-y-14">
          <div className="space-y-14 py-8 px-5 lg:px-12 lg:pt-7 pt xl:px-24 xl:pt-14">
            <div className="space-y-9 lg:space-y-16">
              <HeaderSection />
              <HeroSection />
            </div>
            <CompanyLogoSection />
          </div>
          <div className="space-y-14 py-8 px-5 lg:px-12 lg:pt-7 pt xl:px-24 xl:pt-14 lg:space-y-36">
            <ServicesSection />
            <CaseStudiesSection />
            <OurWorkingSection />
            <TeamSection />
            <TestimonialsSection />
            <ContactSection />
          </div>
        </div>

        <FooterSection />
      </div>
      <HireMe/>

    </div>
  );
};

export default Home;
