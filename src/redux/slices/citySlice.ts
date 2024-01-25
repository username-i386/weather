import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICityState } from "../../types/reducerStates"


const initialState: ICityState = {
   cityName: '', 
}

export const citySlice = createSlice({
   name: 'citySlice',
   initialState,
   reducers: {
      setCityName: (state: ICityState, action: PayloadAction<string>): void => {
         state.cityName = action.payload
      },
   }
})

export const { setCityName } = citySlice.actions;

export default citySlice.reducer;