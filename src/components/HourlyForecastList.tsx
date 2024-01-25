import { Box, Stack, Text } from "@chakra-ui/react";
import { FC, ReactElement, ReactNode } from "react";
import { IFormatedLocalTime, IHourlyForecastListProps } from "../types/componentsProps";
import { HourlyForecastItem } from "./HourlyForecastItem";


export const HourlyForecastList: FC<IHourlyForecastListProps> = ({ todayHourlyForecast, tomorrowHourlyForecast }): ReactElement => {

   const formatedLocalTime = (localTime: string): IFormatedLocalTime => {
      // гггг-мм-дд чч:мм
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


   return (
      <>
         <Text mb={2}>
            {
               formatedLocalTime(todayHourlyForecast[0].time).date.day + '.' +
                  formatedLocalTime(todayHourlyForecast[0].time).date.month + '.' +
                  formatedLocalTime(todayHourlyForecast[0].time).date.year 
            }
         </Text>
         <Stack direction={'row'} flexWrap={'wrap'} align={'center'}>
            {
               todayHourlyForecast.map((element, index): ReactNode => {
                  return (
                     <HourlyForecastItem key={index}
                        currentHoyrlyForecast={element}
                        isFirstItem={(index === 0) ? true : false} />
                  )
               })
            }
         </Stack>
         {
            (tomorrowHourlyForecast.length > 0) ? 
               <Box>
                  <Text mb={2}>
                     {
                        formatedLocalTime(tomorrowHourlyForecast[0].time).date.day + '.' +
                        formatedLocalTime(tomorrowHourlyForecast[0].time).date.month + '.' +
                        formatedLocalTime(tomorrowHourlyForecast[0].time).date.year
                     }
                  </Text>
                  <Stack direction={'row'} flexWrap={'wrap'} align={'center'}>
                     {
                        tomorrowHourlyForecast.map((element, index): ReactNode => {
                           return (
                              <HourlyForecastItem key={index}
                                 currentHoyrlyForecast={element}
                                 isFirstItem={false} />
                           )
                        })
                     }
                  </Stack>
               </Box>
            : <></>
         }
      </>
   )
}