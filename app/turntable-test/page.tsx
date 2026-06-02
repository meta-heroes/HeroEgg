"use client";

import { useState } from "react";
import { Turntable } from "@/components/ui/Turntable";

export default function TurntableTest() {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="min-h-screen bg-[#222] flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-3xl font-bold mb-8">
        ターンテーブル テスト (Frame28再現)
      </h1>

      {/* ターンテーブル — 600px正方形で表示 */}
      <div className="w-[600px] mx-auto">
        <Turntable rotation={rotation} />
      </div>

      {/* コントロール */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setRotation((r) => r + 72)}
          className="px-6 py-3 bg-white text-black rounded-lg font-bold cursor-pointer hover:bg-gray-200"
        >
          ← 左回転 (+72°)
        </button>
        <button
          onClick={() => setRotation(0)}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg font-bold cursor-pointer hover:bg-gray-500"
        >
          リセット
        </button>
        <button
          onClick={() => setRotation((r) => r - 72)}
          className="px-6 py-3 bg-white text-black rounded-lg font-bold cursor-pointer hover:bg-gray-200"
        >
          右回転 (-72°) →
        </button>
      </div>

      <p className="text-white/60 mt-4">
        現在の回転角: {rotation}°
      </p>
    </div>
  );
}
