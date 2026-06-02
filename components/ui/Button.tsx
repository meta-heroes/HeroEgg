"use client";

import { type ReactNode } from "react";

const colorMap = {
  blue: "bg-egg-blue text-white hover:bg-[#3fb5d3]",
  yellow: "bg-egg-yellow text-[#333] hover:bg-[#fdd02e]",
  red: "bg-egg-red text-white hover:bg-[#e45c5e]",
  green: "bg-egg-green text-white hover:bg-[#47a889]",
  orange: "bg-egg-orange text-white hover:bg-[#e89340]",
  dark: "bg-[#333] text-white hover:bg-[#222]",
  line: "bg-[#06c755] text-white hover:bg-[#05b34c]",
  outline: "bg-transparent border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white",
} as const;

const sizeMap = {
  sm: "h-[48px] px-6 text-[16px]",
  md: "h-[61px] px-8 text-[20px]",
  lg: "h-[77px] px-10 text-[30px]",
} as const;

type ButtonProps = {
  children: ReactNode;
  color?: keyof typeof colorMap;
  size?: keyof typeof sizeMap;
  icon?: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  color = "blue",
  size = "md",
  icon,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-[30px] font-bold shadow-[0px_2px_11.9px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer";
  const classes = `${baseClasses} ${colorMap[color]} ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
