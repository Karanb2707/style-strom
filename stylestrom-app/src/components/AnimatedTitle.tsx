import React from "react";
import type { AnimatedTitleProps } from "../types";

const AnimatedText: React.FC<AnimatedTitleProps> = ({ title, className }) => {
  return (
    <div
      classNameftext-center text-4xl uppercase mx-10 tracking-tight md:text-[3.5rem] font-extrabold bg-gradient-to-r from-black via-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight`}
    >
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split("").map((char, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: char }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
