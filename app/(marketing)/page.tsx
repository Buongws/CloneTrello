"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import Productivity from "@/components/landingPage/Productivity";
import { Workflow } from "@/components/landingPage/WorkFlow";
import PlansComp from "@/components/landingPage/PlansComp";
import Header from "@/components/landingPage/Header";
import GetStarted from "@/components/landingPage/GetStarted";

import { useEffect } from "react";

const MarketingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      <main>
        <Header
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <div className="py-16 bg-[#c6fafc]">
          <Productivity
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <Workflow
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <PlansComp
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <GetStarted
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
      </main>
    </>
  );
};

export default MarketingPage;
