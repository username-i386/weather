import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IColorShemeState } from "../../types/reducerStates";

const initialState: IColorShemeState = {
   colorShemeForWarmTemp: 'red.600',
   colorShemeForColdTemp: 'blue.500',
   colorTextForWarmTemp: 'white',
   colorTextForColdTemp: 'white',
}

export const colorShemeSlice = createSlice({
   name: 'colorShemeSlice',
   initialState,
   reducers: {
      setWarmColorSheme: (state: IColorShemeState, action: PayloadAction<string>): void => {
         state.colorShemeForWarmTemp = action.payload;
      },
      setColdColorSheme: (state: IColorShemeState, action: PayloadAction<string>): void => {
         state.colorShemeForColdTemp = action.payload;
      },
      setWarmColorText: (state: IColorShemeState, action: PayloadAction<string>): void => {
         state.colorTextForWarmTemp = action.payload;
      },
      setColdColorText: (state: IColorShemeState, action: PayloadAction<string>): void => {
         state.colorTextForColdTemp = action.payload;
      },
   }
})

export const { setWarmColorSheme, setColdColorSheme, setWarmColorText, setColdColorText } = colorShemeSlice.actions;

export default colorShemeSlice.reducer