import AnimatedText from "./AnimatedTitle";

const Story = () => {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="text-sm uppercase md:text-[10px]">
          The Multiverse of StyleStrom
        </p>

        <div className="relative size-full">
          <AnimatedText
            title="Discover the<br/>Journey of StyleStrom"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img src="/img/entrance.webp" alt="entrance" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
