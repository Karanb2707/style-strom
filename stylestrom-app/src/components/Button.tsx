import type { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  leftIcon,
  containerClass,
  rightIcon,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-4 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
