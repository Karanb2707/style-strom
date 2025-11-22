import React, { useRef, useState } from "react";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upComingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upComingVideoIndex);
    console.log("index", currentIndex);
  };

  const getVideoSource = (index: number): string => {
    return `/videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-50"
      >
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 z-50 size-64 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSource(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
