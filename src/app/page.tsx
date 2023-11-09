import React from "react";
import SiteHeader from "@/app/_components/SiteHeader";
import HeroSection from "@/app/_components/HeroSection";
import OfferSection from "@/app/_components/OfferSection";
import UspSection from "@/app/_components/UspSection";
import PortfolioSection from "@/app/_components/PortfolioSection";
import ProjectTimeline from "@/app/_components/ProjectTimeline";
import References from "@/app/_components/References";
import Faq from "@/app/_components/FAQ";
import SimpleForm from "@/app/_components/SimpleForm";
import Footer from "@/app/_components/Footer";
import BottomBar from "@/app/_components/BottomBar";
import TechStack from "@/app/_components/TechStack";

export default function Home() {
  return <>
    <SiteHeader menu={0} />
    <HeroSection />
    <OfferSection />
    <UspSection />
    <TechStack />
    <PortfolioSection />
    <ProjectTimeline />
    <References />
    <Faq />
    <SimpleForm />
    <Footer />
    <BottomBar />
  </>
}
