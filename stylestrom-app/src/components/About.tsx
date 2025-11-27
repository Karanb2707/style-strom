const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase">
          Welcome to{" "}
          <span className="text-2xl mx-1 font-semibold">GAMEHUB</span>
        </h2>
        <div className="mt-5 text-center text-4xl uppercase mx-10 tracking-tight md:text-[3rem]">
          Discover the best largest shared style gaming platform
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
