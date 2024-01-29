import { IWeatherForecastTransResponse } from "./apiResponses"

export interface IColorShemeState {
   colorShemeForWarmTemp: string
   colorShemeForColdTemp: string
   colorTextForWarmTemp: string
   colorTextForColdTemp: string
}

export interface ICityState {
   cityName: string
}

export interface IAmountHoursSliceState {
   hours: number
}

export interface IWeatherForecsatState {
   forecast: IWeatherForecastTransResponse | null
}
