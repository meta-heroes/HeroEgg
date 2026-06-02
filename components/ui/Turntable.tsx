"use client";

import Image from "next/image";

const PLATE_GRADIENT =
  "conic-gradient(from -36deg, #fed649 0deg 72deg, #54c2dc 72deg 144deg, #f6a04d 144deg 216deg, #52bc9a 216deg 288deg, #ec7072 288deg 360deg)";

const PLATE = { left: 27.64, top: 25.26, size: 47.24 };
const PIVOT = { x: 51.25, y: 48.88 };

const CHARACTERS = [
  { src: "/images/characters/ch-yellow-flag.png",       left: 37.12, top:  4.79, size: 27.44, innerRatio: 100.0, rot:    0 },
  { src: "/images/characters/ch-blue-cheer.png",        left: 63.53, top: 19.94, size: 36.47, innerRatio:  80.1, rot:   73 },
  { src: "/images/characters/ch-orange-microphone.png", left: 49.49, top: 55.27, size: 39.94, innerRatio:  71.8, rot:  145 },
  { src: "/images/characters/ch-green-teacher.png",     left: 10.90, top: 52.80, size: 41.61, innerRatio:  71.4, rot: -143 },
  { src: "/images/characters/ch-red-tickets.png",       left:  0.00, top: 15.61, size: 46.96, innerRatio:  78.7, rot:  -71 },
];

// Figmaから取得した影の楕円 (opacity=0.23, fill=black, rotation=0)
const SHADOWS = [
  { left: 44.17, top: 27.01, w: 16.18, h:  2.94 },  // 黄旗
  { left: 67.27, top: 35.71, w:  7.55, h: 16.33 },  // 青メガホン
  { left: 54.65, top: 60.31, w: 14.94, h: 11.69 },  // オレンジマイク
  { left: 30.83, top: 58.50, w: 14.69, h: 12.09 },  // 緑先生
  // 赤チケットは2体なので影2つ
  { left: 27.46, top: 43.94, w:  5.91, h: 11.33 },  // 赤チケット左
  { left: 32.86, top: 28.25, w:  5.91, h: 11.33 },  // 赤チケット右
];

type TurntableProps = {
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Turntable({ rotation = 0, className = "", style }: TurntableProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "1 / 1", ...style }}>
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-in-out"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: `${PIVOT.x}% ${PIVOT.y}%`,
        }}
      >
        {/* 円形プレート */}
        <div
          className="absolute rounded-full"
          style={{
            left: `${PLATE.left}%`,
            top: `${PLATE.top}%`,
            width: `${PLATE.size}%`,
            height: `${PLATE.size}%`,
            background: PLATE_GRADIENT,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 120px rgba(0,0,0,0.08)",
          }}
        />

        {/* 影の楕円 — プレートの上、キャラクターの下 */}
        {SHADOWS.map((shadow, i) => (
          <div
            key={`shadow-${i}`}
            className="absolute rounded-[50%]"
            style={{
              left: `${shadow.left}%`,
              top: `${shadow.top}%`,
              width: `${shadow.w}%`,
              height: `${shadow.h}%`,
              background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0) 70%)",
              filter: "blur(4px)",
            }}
          />
        ))}

        {/* キャラクター5体 */}
        {CHARACTERS.map((char, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: `${char.left}%`,
              top: `${char.top}%`,
              width: `${char.size}%`,
              height: `${char.size}%`,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${char.innerRatio}%`,
                aspectRatio: "1 / 1",
                transform: `rotate(${char.rot}deg)`,
              }}
            >
              <Image src={char.src} alt="" fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
