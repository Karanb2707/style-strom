import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-12">
        <div className="px-5 py-12 ">
          <p className="text-lg text-blue-50">
            Elevate Your Style. Define Your Identity.
          </p>
          <p className="max-w-d text-lg text-blue-50 opacity-50">
            StyleStrom is where creativity meets confidence, helping you express
            yourself through bold and effortless style. From trend-driven looks
            to timeless essentials, every piece is crafted to elevate your
            personality. Explore, experiment, and redefine what fashion means to
            you. Your style journey starts here.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src="videos/feature-1.mp4"
            title="Style Unlocked"
            description="Craft your signature look with effortless precision and elevate your everyday style into a bold expression of confidence that turns heads wherever you go."
            isComingSoon={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
