import React, { useRef, useState } from "react";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const totalVideos = 4;

  const nextMiniVideoRef = useRef<HTMLVideoElement | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upComingVideoIndex =
    currentIndex === totalVideos ? 1 : currentIndex + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upComingVideoIndex);
    console.log("video index", currentIndex);
  };

  const getVideoSource = (index: number): string => {
    console.log("getting video source for index:", index);
    return `/videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-50"
      >
        <div className="relative w-full h-full">
          <div className="center-abs z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextMiniVideoRef}
                src={getVideoSource(upComingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={mainVideoRef}
            src={getVideoSource(currentIndex)}
            loop
            muted
            id="next-video"
            className="center-abs invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSource(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="hero-heading absolute bottom-5 right-5 z-50 text-blue-50 tracking-tighter">
          Gami<span className="text-orange-400">n</span>g
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-12 px-5 sm:px-10">
            <h1 className="hero-heading text-blue-50">
              Redefi<span className="text-orange-400">n</span>e
            </h1>
            <p className="m-2 max-w-64 text-blue-100">
              Enter the MetaGame Layer <br />
              Unleash the play Economy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
