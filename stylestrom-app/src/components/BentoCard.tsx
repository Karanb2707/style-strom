import type { BentoCardProps } from "../types";

const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title">{title}</h1>
        </div>
      </div>
      {title}
    </div>
  );
};

export default BentoCard;
