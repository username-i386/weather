import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useColorSheme = (temperature: number) => {
   const colorSheme = useSelector((state: RootState) => state.colorSheme);
   if (temperature >= 0) {
      return {
         colorShemeBg: colorSheme.colorShemeForWarmTemp,
         colorShemeText: colorSheme.colorTextForWarmTemp,
      }
   } else {
      return {
         colorShemeBg: colorSheme.colorShemeForColdTemp,
         colorShemeText: colorSheme.colorTextForColdTemp,
      }
   }
} 