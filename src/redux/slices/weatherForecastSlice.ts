import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeatherForecsatState } from "../../types/reducerStates";
import { IWeatherForecastTransResponse } from "../../types/apiResponses";


const initialState: IWeatherForecsatState = {
   forecast: null
}

export const weatherForecastSlice = createSlice({
   name: 'colorShemeSlice',
   initialState,
   reducers: {
      setWeatherForecsat: (state: IWeatherForecsatState, action: PayloadAction<IWeatherForecastTransResponse>): void => {
         state.forecast = action.payload
      },
   }
})

export const { setWeatherForecsat } = weatherForecastSlice.actions;

export default weatherForecastSlice.reducer