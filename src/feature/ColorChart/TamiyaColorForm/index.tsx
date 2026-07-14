"use client";

import { TamiyaColorImageList } from "@src/feature/ColorChart/TamiyaColorImageList";
import { useState } from "react";
import { TamiyaColorData } from "@src/feature/ColorChart/types";

type TamiyaColorFormProps = {
  colorList: TamiyaColorData[];
  label: "X" | "XF" | "LP";
};

const TamiyaColorForm = ({ colorList, label }: TamiyaColorFormProps) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <>
      <label className="inline-flex w-fit cursor-pointer select-none items-center gap-3 px-4 py-2">
        <input
          type="checkbox"
          checked={isShow}
          onChange={() => setIsShow(!isShow)}
          name={label}
          className="peer sr-only"
        />
        <span className="relative h-6 w-11 rounded-full bg-gray-400 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:bg-[#1976d2] peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-[#1976d2]/50" />
        <span>{label}</span>
      </label>
      {isShow && <TamiyaColorImageList prefix={label} colorList={colorList} />}
    </>
  );
};

export { TamiyaColorForm };
