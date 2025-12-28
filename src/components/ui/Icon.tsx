import {
  Icon as IconifyIcon,
  type IconProps as IconifyIconProps,
} from "@iconify/react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<IconifyIconProps, "icon"> {
  icon: string;
  className?: string;
  size?: number | string;
}

export function Icon({ icon, className, size, ...props }: IconProps) {
  return (
    <IconifyIcon
      icon={icon}
      className={cn(className)}
      width={size}
      height={size}
      {...props}
    />
  );
}
