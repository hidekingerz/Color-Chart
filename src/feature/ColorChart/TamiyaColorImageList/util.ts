import _ from "lodash";
import { TamiyaColorData } from "@src/feature/ColorChart/types";

export const findData = (searchWord: string, targetData: TamiyaColorData[]) => {
  return targetData.filter((data: TamiyaColorData) => String(data.colorCode).includes(searchWord));
};

export const sortData = (data: TamiyaColorData[]) => {
  return _.sortBy(data, ["colorCode"]);
};
