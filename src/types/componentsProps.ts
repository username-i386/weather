import { Forecastday, IHourlyForecast, ISearchCityTransResponse, IWeatherForecastTransResponse } from "./apiResponses"

export interface IColorChangeProps {
   colors: string[]
   colorVariants: number[]
   isWarm: boolean
   onToggle: () => void
}

export interface IChanegColorModeProps {
   sizeMode: string
}

export interface ICitiesListProps {
   searchCityResponse: ISearchCityTransResponse | undefined
   inputValue: string
   setInputValue: (state: string) => void
   setRequest: (state: { title: string, skip: boolean }) => void
   isLoading: boolean
   isError: boolean
}

export interface IFormatedLocalTime {
   date: {
      year: string
      month: string
      day: string
   },
   time: {
      hours: string
      minutes: string
   }
}

export interface ITodayForecastProps {
   localTime: IFormatedLocalTime | void
   forecast: IWeatherForecastTransResponse
}

export interface IHourlyForecastProps {
   localTime: IFormatedLocalTime | void
   forecast: IWeatherForecastTransResponse
}

export interface ITodayForecastMeteodataListProps {
   forecast: IWeatherForecastTransResponse
}

export interface IWeatherIconProps {
   weatherIconCode: number
   defaultWeatherIcon: string
}

export interface IHourlyForecastItemProps {
   currentHoyrlyForecast: IHourlyForecast
   isFirstItem: boolean
}

export interface IHourlyForecastListProps {
   todayHourlyForecast: IHourlyForecast[]
   tomorrowHourlyForecast: IHourlyForecast[]
}

export interface IDailyForecastProps {
   forecast: IWeatherForecastTransResponse
}

export interface IDailyForecastCardProps {
   date: {
      year: string
      month: string
      day: string
   }
   forecast: Forecastday
}

export interface IPushNotificationProps {
   forecast: IWeatherForecastTransResponse
}