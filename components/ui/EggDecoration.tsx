import Image from "next/image";

const eggImages: Record<string, string> = {
  red: "/images/decorations/egg-red.png",
  yellow: "/images/decorations/egg-yellow.png",
  green: "/images/decorations/egg-green.png",
  blue: "/images/decorations/egg-blue.png",
  orange: "/images/decorations/egg-orange.png",
};

type EggDecorationProps = {
  color: "red" | "yellow" | "green" | "blue" | "orange";
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  rotate?: number;
  className?: string;
};

export function EggDecoration({
  color,
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.3,
  rotate = 0,
  className = "",
}: EggDecorationProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <Image
        src={eggImages[color]}
        alt=""
        fill
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  );
}
