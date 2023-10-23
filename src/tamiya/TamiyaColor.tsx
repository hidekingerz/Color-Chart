import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { TamiyaColorData } from "./types.ts";

export type TamiyaColorProps = {
  type: "X" | "XF" | "LP";
  colorList: TamiyaColorData[];
};

const TamiyaColor = ({ type, colorList }: TamiyaColorProps): JSX.Element => {
  return (
    <>
      <h5>{type}</h5>
      <ImageList rowHeight={300} cols={4}>
        {colorList.map((item: TamiyaColorData) => (
          <ImageListItem key={item.colorCode}>
            <img src={item.url} alt={item.name} loading="lazy" />
            <ImageListItemBar
              title={item.name}
              subtitle={item.colorCode}
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
