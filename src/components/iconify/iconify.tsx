import { Icon } from "@iconify/react";

interface IconifyProps {
  icon: string;
  size?: string | number;
  className?: string;
}

export const Iconify = ({ icon, size = 14, className }: IconifyProps) => {
  return (
    <Icon
      icon={icon}
      className={className}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
