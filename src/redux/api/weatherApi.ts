import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISearchCityTransResponse, ISearchCityResponse, IWeatherForecastResponse, IWeatherForecastParams, IWeatherForecastTransResponse } from '../../types/apiResponses';

const API_KEY: string = '0ba47b646ac340aaa1204237232512';

export const weatherApi = createApi({
   reducerPath: 'weatherApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
   endpoints: builder => ({
      searchCity: builder.query<ISearchCityTransResponse, string>({
         query: (location) => ({
            url: '/search.json',
            params: {
               key: API_KEY,
               q: location,
            },
         }),
         transformResponse: (response: ISearchCityResponse[]): ISearchCityTransResponse => ({
            cities: response.map(element => ({
               city: element.name,
               country: element.country,
            }))
         }),
      }),
      getWeatherForecast: builder.query<IWeatherForecastTransResponse, IWeatherForecastParams>({
         query: (params) => ({
            url:'/forecast.json',
            params: {
               key: API_KEY,
               q: params.location,
               lang: 'ru',
               days: params.amountDays,
            }
         }),
         transformResponse: (response: IWeatherForecastResponse): IWeatherForecastTransResponse => ({
            country: response.location.country,
            city: response.location.name,
            localtime: response.location.localtime,
            todayForecast: {
               temperature: response.current.temp_c,
               tempFeelsLike: response.current.feelslike_c,
               pressure: response.current.pressure_in,
               precipitation: response.current.precip_mm,
               humidity: response.current.humidity,
               cloud: response.current.cloud,
               uv: response.current.uv,
               visability: response.current.vis_km,
               wind: {
                  speed: response.current.wind_kph,
                  gust: response.current.gust_kph,
                  direction: response.current.wind_dir,
                  directionDegree: response.current.wind_degree,
               },
               discription: {
                  text: response.current.condition.text,
                  img: response.current.condition.icon,
                  code: response.current.condition.code,
               },
            },
            days: response.forecast.forecastday,
         }),
      })
   })
})

export const { useSearchCityQuery, useGetWeatherForecastQuery } = weatherApi;