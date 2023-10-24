import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { TamiyaColorData } from "./types.ts";

export type TamiyaColorProps = {
  prefix: "X" | "XF" | "LP";
  colorList: TamiyaColorData[];
};

const TamiyaColor = ({ prefix, colorList }: TamiyaColorProps): JSX.Element => {
  return (
    <>
      <ImageList cols={6}>
        {colorList.map((item: TamiyaColorData) => (
          <ImageListItem key={item.colorCode}>
            <img src={item.url} alt={item.name} loading="lazy" />
            <ImageListItemBar
              title={item.name}
              subtitle={prefix + "-" + item.colorCode}
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
    </>
  );
};

export { TamiyaColor };
