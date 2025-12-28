import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedTitle";
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
    <div id="about" className="min-h-screen w-screen pt-8">
      <div className="relative mb-8 mt-12 flex flex-col items-center gap-8">
        <h2 className="text-sm tracking-widest uppercase font-semibold">
          Welcome to{" "}
          <span className="mx-2 text-orange-600 text-4xl font-['Science_Gothic']">
            <span className="text-black text-6xl font-['Science_Gothic']">
              S
            </span>
            tyle
            <span className="text-black text-6xl font-['Science_Gothic']">
              S
            </span>
            trom
          </span>
        </h2>

        <AnimatedText
          title="Unleash Your Style, <br/> Rewrite the Motion "
          containerClass="mt-2 !text-black text-center"
        />
        <div className="text-center space-y-1">
          <p className="text-black text-[14px] md:text-lg font-light tracking-wide">
            Where creativity flows into every frame you imagine.
          </p>
          <p className="text-orange-600 text-[14px] md:text-lg font-light tracking-wide">
            A new wave of animation that moves with your vibe.
          </p>
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
