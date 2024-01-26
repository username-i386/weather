import { FC, ReactElement, ReactNode } from "react";
import { IDailyForecastProps } from "../types/componentsProps";
import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { DailyForecastCard } from "./DailyForecastCard";


export const DailyForecast: FC<IDailyForecastProps> = ({ forecast }): ReactElement => {

   const hourlyForecastBg = useColorModeValue('gray.200', 'gray.700');

   function formatedLocalTime(localTime: string) {
      // гггг-мм-дд
      return {
         year: localTime.split(' ')[0].split('-')[0],
         month: localTime.split(' ')[0].split('-')[1],
         day: localTime.split(' ')[0].split('-')[2],
      }
   }



   return (
      <Box rounded={'lg'} p={4} bg={hourlyForecastBg}>
         <Heading size={'lg'} mb={4}>Ежедневный прогноз:</Heading>
         <Stack direction={'row'} flexWrap={'wrap'} justify={['center', 'center', 'center', 'start']}>
            {
               forecast.days.map((element, index): ReactNode => {
                  const date = formatedLocalTime(element.date)
                  return (
                     <DailyForecastCard key={index} forecast={element} date={date} />
                  )
               })
            }
         </Stack>
      </Box>
   )
}