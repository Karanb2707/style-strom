import React, { useRef, useState } from "react";
import Button from "./Button";
import { Navigation } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextMiniVideoRef.current?.play();
            mainVideoRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

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
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<Navigation width={16} height={16} />}
              containerClass="bg-yellow-300 flex-center gap-2"
            />
          </div>
        </div>
      </div>
      <h1 className="hero-heading absolute bottom-5 right-5 text-black tracking-tighter">
        Gami<span className="text-orange-400">n</span>g
      </h1>
    </div>
  );
};

export default Hero;
