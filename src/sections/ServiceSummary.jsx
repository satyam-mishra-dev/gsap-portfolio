import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useGSAP(() => {
    // Responsive animation values
    const animationValues = isMobile 
      ? {
          title1: 10,   // Reduced from 20
          title2: -15,  // Reduced from -30
          title3: 30,   // Reduced from 100
          title4: -30,  // Reduced from -100
        }
      : {
          title1: 20,
          title2: -30,
          title3: 100,
          title4: -100,
        };

    gsap.to("#title-service-1", {
      xPercent: animationValues.title1,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: animationValues.title2,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: animationValues.title3,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: animationValues.title4,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  }, [isMobile]);
  return (
    <section className="mt-20 font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Agentic AI & Integration</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Web</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Development & Design</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>Optimize</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Automate</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deploy</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>LLM & MLOPs</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
