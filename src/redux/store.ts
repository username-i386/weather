import { configureStore } from "@reduxjs/toolkit";
import colorShemeReducer from './slices/colorShemeSlice';
import cityReducer from './slices/citySlice'
import { weatherApi } from "./api/weatherApi";
import amountHoursSlice from "./slices/amountHoursSlice";
import weatherForecastSlice from "./slices/weatherForecastSlice";

export const store = configureStore({
   reducer: {
      colorSheme: colorShemeReducer,
      city: cityReducer,
      amountHours: amountHoursSlice,
      forecast: weatherForecastSlice,
      [weatherApi.reducerPath]: weatherApi.reducer,
   },
   middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(weatherApi.middleware)
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch