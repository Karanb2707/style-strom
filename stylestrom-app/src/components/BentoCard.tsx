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
      {title}
    </div>
  );
};

export default BentoCard;
