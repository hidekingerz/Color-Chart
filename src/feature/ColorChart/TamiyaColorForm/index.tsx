import { FormControlLabel, Switch } from "@mui/material";
import { TamiyaColorImageList } from "@src/feature/ColorChart/TamiyaColorImageList";
import { useState } from "react";
import { TamiyaColorData } from "@src/feature/ColorChart/TamiyaColorImageList/types.ts";

type TamiyaColorFormProps = {
  colorList: TamiyaColorData[];
  label: "X" | "XF" | "LP";
};

const TamiyaColorForm = ({ colorList, label }: TamiyaColorFormProps) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <>
      <FormControlLabel
        control={<Switch checked={isShow} onChange={() => setIsShow(!isShow)} name={label} />}
        label={label}
      />
      {isShow && <TamiyaColorImageList prefix={label} colorList={colorList} />}
    </>
  );
};

export { TamiyaColorForm };
