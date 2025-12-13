import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-12">
        <div className="px-2 py-12 ">
          <p className="text-2xl font-semibold text-blue-50 mb-1">
            Elevate Your Style. Define Your Identity.
          </p>
          <p className="max-w-d text-base text-blue-200 opacity-50">
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
            description="Craft your signature look with ease and transform your everyday style into a confident statement."
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-6">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title="Essence"
              description="Shape your signature look with ease and elevate your style every day."
            />
          </div>

          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title="Aura"
              description="Define your unique style with effortless detail and elevate your daily presence."
            />
          </div>
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title="Vibe"
              description="Craft your personal style with ease and carry confidence every day."
            />
          </div>

          <div className="bento-tilt_2">
            <div className="flex flex-col size-full justify-between bg-blue-300 p-5">
              <h1 className="bento-title max-w-64 text-black">
                More coming soon!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
