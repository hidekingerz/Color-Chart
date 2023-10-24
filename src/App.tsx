import { TamiyaColorData } from "./tamiya/types.ts";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { findData, sortData } from "./tamiya/util.ts";
import paints from "./const/paintsData.json";
import { TamiyaColor } from "./tamiya/TamiyaColor.tsx";
import SearchAppBar from "./AppBar.tsx";

type SwitchState = {
  x: boolean;
  xf: boolean;
  lp: boolean;
};

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
  const [switchState, setSwitchState] = useState<SwitchState>({
    x: true,
    xf: true,
    lp: true,
  });
  const [colors, setColors] = useState<Paints>(defaultPaints);

  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    setColors({
      x: findData(event.target.value, defaultPaints.x),
      xf: findData(event.target.value, defaultPaints.xf),
      lp: findData(event.target.value, defaultPaints.lp),
    });
  };

  const onChangeSwitchState = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
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
        <FormControlLabel
          control={<Switch checked={switchState.x} onChange={onChangeSwitchState} name="x" />}
          label="X"
        />
        {switchState.x && <TamiyaColor prefix="X" colorList={colors.x} />}
        <FormControlLabel
          control={<Switch checked={switchState.xf} onChange={onChangeSwitchState} name="xf" />}
          label="XF"
        />
        {switchState.xf && <TamiyaColor prefix="XF" colorList={colors.xf} />}
        <FormControlLabel
          control={<Switch checked={switchState.lp} onChange={onChangeSwitchState} name="lp" />}
          label="LP"
        />
        {switchState.lp && <TamiyaColor prefix="LP" colorList={colors.lp} />}
      </FormGroup>
    </>
  );
}

export { App };
