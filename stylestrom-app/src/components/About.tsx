import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-12 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase">
          Welcome to{" "}
          <span className="text-2xl mx-1 font-semibold">StyleStrom</span>
        </h2>
        <div className="mt-5 text-center text-4xl uppercase mx-10 tracking-tight md:text-[3rem]">
          Unleash Your Style, Rewrite the Motion.
        </div>
        <div className="">
          <p>Where creativity flows into every frame you imagine.</p>
          <p>A new wave of animation that moves with your vibe.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
