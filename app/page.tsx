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
import { OurWorkingCardList } from "./_compponent/our-working-card";

const Home = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 ">
      <div className="space-y-24">
        <div className="space-y-14 py-8 px-5">
          <div className="space-y-9">
            <HeaderSection />
            <HeroSection />
          </div>
          <CompanyLogoSection />
          <ServicesSection />
          <CaseStudiesSection />
          <OurWorkingSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
