import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

type ImageClipBoxProps = {
  src: string;
  clipClass: string;
};

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-12 min-h-96 w-screen">
      <div className="relative rounded-lg bg-black py-18 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-20 translate-y-40"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-24 md:mt-0">
          <p className="mb-6 font-general text-xs uppercase">
            Join Stylestrom Community
          </p>

          <AnimatedTitle
            title="Let’s build intelligent, high-performance software together."
            containerClass="special-font !text-4xl md:!text-6xl w-full text-blue-400 !leading-[.9]"
          />

          <Button
            id="contatUsBtn"
            title="contact us"
            containerClass="mt-10 cursor-pointer bg-white font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
