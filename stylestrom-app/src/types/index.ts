// define types here

export interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
}

export interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}
export interface BentoCardProps {
  src: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}
