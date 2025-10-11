import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useGSAP(() => {
    // Clear any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.target && typeof trigger.vars.target === 'string' && trigger.vars.target.includes('title-service')) {
        trigger.kill();
      }
    });

    // Responsive animation values
    const animationValues = isMobile 
      ? {
          title1: 8,    // Further reduced for mobile
          title2: -12,  // Further reduced for mobile
          title3: 25,   // Further reduced for mobile
          title4: -25,  // Further reduced for mobile
        }
      : {
          title1: 20,
          title2: -30,
          title3: 100,
          title4: -100,
        };

    // Create a timeline for smooth bidirectional animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-summary-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Animate each title based on scroll progress
          gsap.set("#title-service-1", { xPercent: animationValues.title1 * progress });
          gsap.set("#title-service-2", { xPercent: animationValues.title2 * progress });
          gsap.set("#title-service-3", { xPercent: animationValues.title3 * progress });
          gsap.set("#title-service-4", { xPercent: animationValues.title4 * progress });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && trigger.vars.trigger.classList && trigger.vars.trigger.classList.contains('service-summary-section')) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]);
  return (
    <section className="service-summary-section mt-20 font-light leading-snug text-center mb-42 contact-text-responsive overflow-x-clip">
      <div id="title-service-1">
        <p>Agentic AI & Integration</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 md:translate-x-16"
      >
        <p className="font-normal">Web</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Development & Design</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 md:-translate-x-48"
      >
        <p>Optimize</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Automate</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deploy</p>
      </div>
      <div id="title-service-4" className="md:translate-x-48">
        <p>LLM & MLOPs</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
