import { FormGroup } from "@mui/material";
import { ChangeEvent, useState } from "react";

import paints from "@src/const/paintsData.json";
import SearchAppBar from "@src/feature/ColorChart/AppBar";
import { TamiyaColorData } from "@src/feature/ColorChart/TamiyaColorImageList/types";
import { findData, sortData } from "@src/feature/ColorChart/TamiyaColorImageList/util.ts";
import { TamiyaColorForm } from "@src/feature/ColorChart/TamiyaColorForm";

type Paints = {
  x: TamiyaColorData[];
  xf: TamiyaColorData[];
  lp: TamiyaColorData[];
};

const defaultPaints: Paints = {
  x: sortData(paints.data.X),
  xf: sortData(paints.data.XF),
  lp: sortData(paints.data.LP),
};

function App() {
  const [searchString, setSearchString] = useState<string>("");
  const [colors, setColors] = useState<Paints>(defaultPaints);

  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    setColors({
      x: findData(event.target.value, defaultPaints.x),
      xf: findData(event.target.value, defaultPaints.xf),
      lp: findData(event.target.value, defaultPaints.lp),
    });
  };

  const reset = () => {
    setSearchString("");
    setColors(defaultPaints);
  };

  return (
    <>
      <SearchAppBar onInputHandler={onInputHandler} onResetHandler={reset} inputValue={searchString} />

      <FormGroup>
        <TamiyaColorForm colorList={colors.x} label={"X"} />
        <TamiyaColorForm colorList={colors.xf} label={"XF"} />
        <TamiyaColorForm colorList={colors.lp} label={"LP"} />
      </FormGroup>
    </>
  );
}

export { App };
