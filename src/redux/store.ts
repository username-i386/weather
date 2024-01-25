import { configureStore } from "@reduxjs/toolkit";
import colorShemeReducer from './slices/colorShemeSlice';
import cityReducer from './slices/citySlice'
import { weatherApi } from "./api/weatherApi";
import amountHoursSlice from "./slices/amountHoursSlice";

export const store = configureStore({
   reducer: {
      colorSheme: colorShemeReducer,
      city: cityReducer,
      amountHours: amountHoursSlice,
      [weatherApi.reducerPath]: weatherApi.reducer,
   },
   middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(weatherApi.middleware)
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch