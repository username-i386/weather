import {Box, Heading, Stack} from "@chakra-ui/react";
import { FC, ReactElement, useEffect, useState } from "react";
import { useGetWeatherForecastQuery } from "../redux/api/weatherApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TodayForecast } from "./TodayForecast";
import { IFormatedLocalTime } from "../types/componentsProps";
import {HourlyForecast} from "./HourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { Loading } from "./Loading";
import { setCityName } from "../redux/slices/citySlice";
import { InitSearchBar } from "./InitSearchBar";
import { setWeatherForecsat } from "../redux/slices/weatherForecastSlice";


export const WeatherForecast: FC = (): ReactElement => {

   const dispatch = useDispatch();

   const city = useSelector((state: RootState) => state.city.cityName);

   function success(pos: GeolocationPosition) {
      const crd = pos.coords;

      const location = crd.latitude + ',' + crd.longitude;

      setRequest({
         skip: false,
         params: {
            location,
            amountDays: 14,
         },
      })

      dispatch(setCityName(location));
      localStorage.setItem('city', location);
   }


   useEffect(() => {
      navigator.geolocation.getCurrentPosition(success)
   }, [])
   


   const [request, setRequest] = useState({
      skip: true,
      params: {
         location: '',
         amountDays: 14,
      },
   })

   useEffect(() => {
      if (city) {
         setRequest({
            skip: false,
            params: {
               location: city,
               amountDays: 14,
            },
         })
      }
   }, [city])

   const { data, isLoading, isError, localTime } = useGetWeatherForecastQuery(request.params, {
      skip: request.skip,
      selectFromResult: ({ data, isLoading, isError }) => ({
         data,
         isLoading,
         isError,
         localTime: formatedLocalTime(data?.localtime)
      })
   });

   function formatedLocalTime(localTime: string | undefined): IFormatedLocalTime | void {
      // гггг-мм-дд чч:мм
      if (localTime) {
         return {
            date: {
               year: localTime.split(' ')[0].split('-')[0],
               month: localTime.split(' ')[0].split('-')[1],
               day: localTime.split(' ')[0].split('-')[2],
            },
            time: {
               hours: localTime.split(' ')[1].split(':')[0],
               minutes: localTime.split(' ')[1].split(':')[1],
            }
         }
      }
   }

   useEffect(() => {
      if (data) {
         dispatch(setWeatherForecsat(data));
      }
   }, [data])

   if (isLoading) return <Loading />
   if (isError) return <Box>Error</Box>
   if (!data) return <InitSearchBar />

   return (
      <Box as="main">
         <Box mb={4}>
            <Heading>
               {
                  data.city + ', ' + data.country
               }
            </Heading>
         </Box>
         <Stack>
            <TodayForecast localTime={localTime} forecast={data}/>
            <HourlyForecast localTime={localTime} forecast={data} />
            <DailyForecast forecast={data} />
         </Stack>
      </Box>
   )
}