"use client";

import { TamiyaColorData } from "@src/feature/ColorChart/types";
import { JSX } from "react";

type TamiyaColorImageListProps = {
  prefix: "X" | "XF" | "LP";
  colorList: TamiyaColorData[];
};

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

/**
 * Tamiyaのカラーリストを表示するためのコンポーネントです。
 *
 * @param prefix カラーリストのプレフィックス
 * @param colorList カラーリストの配列
 * @returns TamiyaColorコンポーネントのJSX要素
 */
const TamiyaColorImageList = ({ prefix, colorList }: TamiyaColorImageListProps): JSX.Element => {
  return (
    <div>
      <ul className="grid list-none grid-cols-[repeat(auto-fill,240px)] gap-1 p-1">
        {colorList.map((item: TamiyaColorData) => (
          <li key={item.colorCode} className="relative w-[240px]">
            <img
              src={item.url}
              alt={item.name}
              width="240"
              height="200"
              loading="lazy"
              className="block h-[200px] w-[240px] object-cover"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-linear-to-b from-black/70 via-black/40 to-transparent px-3 py-1.5 text-white">
              <div className="min-w-0">
                <div className="truncate text-base">{item.name}</div>
                <div className="text-xs text-white/70">{prefix + "-" + item.colorCode}</div>
              </div>
              <button
                type="button"
                aria-label={`info about ${item.name}`}
                className="shrink-0 p-2 text-white/55 transition-colors hover:text-white"
              >
                <InfoIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {colorList.length === 0 && <div className="px-4 py-2">nothing</div>}
    </div>
  );
};

export { TamiyaColorImageList };
