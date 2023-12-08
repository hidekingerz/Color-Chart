import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { TamiyaColorData } from "./types.ts";
import { useEffect, useRef, useState } from "react";

export type TamiyaColorProps = {
  prefix: "X" | "XF" | "LP";
  colorList: TamiyaColorData[];
};

const TamiyaColor = ({ prefix, colorList }: TamiyaColorProps): JSX.Element => {
  const [cols, setCols] = useState<number>(6);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const clientWidth: number = ref?.current.clientWidth;
      setCols(Math.trunc(clientWidth / 240));
    }
  }, [ref]);

  return (
    <div ref={ref}>
      <ImageList cols={cols} rowHeight={220}>
        {colorList.map((item: TamiyaColorData) => (
          <ImageListItem key={item.colorCode} sx={{ width: "240px" }}>
            <img src={item.url} alt={item.name} width="240" height="200" loading="lazy" />
            <ImageListItemBar
              title={item.name}
              subtitle={prefix + "-" + item.colorCode}
              position={"top"}
              actionIcon={
                <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${item.name}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      {colorList.length === 0 && <div>nothing</div>}
    </div>
  );
};

export { TamiyaColor };
