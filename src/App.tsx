import "./App.css";
import { TamiyaColorData } from "./tamiya/types.ts";
import { Button, FormControlLabel, FormGroup, Stack, Switch, TextField } from "@mui/material";
import { useState } from "react";
import { findData, sortData } from "./tamiya/util.ts";
import paints from "./const/paintsData.json";
import { TamiyaColor } from "./tamiya/TamiyaColor.tsx";

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

function App() {
  const defaultPaints: Paints = {
    x: sortData(paints.data.X),
    xf: sortData(paints.data.XF),
    lp: sortData(paints.data.LP),
  };

  const [searchString, setSearchString] = useState<string>("");
  const [switchState, setSwitchState] = useState<SwitchState>({
    x: true,
    xf: true,
    lp: true,
  });
  const [colors, setColors] = useState<Paints>(defaultPaints);

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    setColors({
      x: findData(event.target.value, defaultPaints.x),
      xf: findData(event.target.value, defaultPaints.xf),
      lp: findData(event.target.value, defaultPaints.lp),
    });
  };

  const onChangeSwitchState = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="App">
      <h1>Tamiya Colors</h1>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={switchState.x} onChange={onChangeSwitchState} name="x" />}
            label="X"
          />
          <FormControlLabel
            control={<Switch checked={switchState.xf} onChange={onChangeSwitchState} name="xf" />}
            label="XF"
          />
          <FormControlLabel
            control={<Switch checked={switchState.lp} onChange={onChangeSwitchState} name="lp" />}
            label="LP"
          />
        </FormGroup>
        <TextField id="color-search" label="Search" value={searchString} onChange={onInputHandler} />
        <Button onClick={() => reset()}>Reset</Button>
      </Stack>
      {switchState.x && <TamiyaColor prefix="X" colorList={colors.x} />}
      {switchState.xf && <TamiyaColor prefix="XF" colorList={colors.xf} />}
      {switchState.lp && <TamiyaColor prefix="LP" colorList={colors.lp} />}
    </div>
  );
}

export { App };
