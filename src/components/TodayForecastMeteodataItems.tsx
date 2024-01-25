import { Tr, Td, useMediaQuery, Show } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { ITodayForecastMeteodataListProps } from "../types/componentsProps";


export const TodayForecastMeteodataItems: FC<ITodayForecastMeteodataListProps> = ({ forecast }): ReactElement => {

   const [isSmallerThan1121px] = useMediaQuery('(max-width: 1121px)');
   
   if (isSmallerThan1121px) {
      return (
         <>
            <Tr>
               <Td>Ощущается как:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.tempFeelsLike + 'C°'}</Td>
            </Tr>
            <Tr>
               <Td>Облачность:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.cloud + '%'}</Td>
            </Tr>
            <Tr>
               <Td>Влажность:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.humidity + '%'}</Td>
            </Tr>
            <Tr>
               <Td>
                  Скорость ветра:
               </Td>
               <Td textAlign={'center'}>{forecast.todayForecast.wind.speed + ' км/ч'}</Td>
            </Tr>
            <Tr>
               <Td>
                  Направление ветра:
               </Td>
               <Td textAlign={'center'}>{forecast.todayForecast.wind.direction + ` (${forecast.todayForecast.wind.directionDegree}°)`}</Td>
            </Tr>
            <Tr>
               <Td>Осадки:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.precipitation + ' мм'}</Td>
            </Tr>
            <Tr>
               <Td>Порыв ветра:</Td>
               <Td textAlign={'center'} >{forecast.todayForecast.wind.gust + ' км/ч'}</Td>
            </Tr>
            <Tr>
               <Td>Видимость:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.visability + ' км'}</Td>
            </Tr>
            <Tr>
               <Td>Давление:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.pressure + ' д.'}</Td>
            </Tr>
            <Tr>
               <Td>УФ-индекс:</Td>
               <Td textAlign={'center'}>{forecast.todayForecast.uv}</Td>
            </Tr>
         </>
      )
   } else {
      return (
         <>
            <Tr>
               <Td>Ощущается как:</Td>
               <Td >{forecast.todayForecast.tempFeelsLike + 'C°'}</Td>
               <Td isNumeric>Облачность:</Td>
               <Td isNumeric>{forecast.todayForecast.cloud + '%'}</Td>
            </Tr>
            <Tr>
               <Td>Скорость ветра:</Td>
               <Td >{forecast.todayForecast.wind.speed + ' км/ч'}</Td>
               <Td isNumeric>Влажность:</Td>
               <Td isNumeric>{forecast.todayForecast.humidity + '%'}</Td>
            </Tr>
            <Tr>
               <Td>Направление ветра:</Td>
               <Td >{forecast.todayForecast.wind.direction + ` (${forecast.todayForecast.wind.directionDegree}°)`}</Td>
               <Td isNumeric>Количество осадков:</Td>
               <Td isNumeric>{forecast.todayForecast.precipitation + ' мм'}</Td>
            </Tr>
            <Tr>
               <Td>Порыв ветра:</Td>
               <Td >{forecast.todayForecast.wind.gust + 'км/ч'}</Td>
               <Td isNumeric>Видимость:</Td>
               <Td isNumeric>{forecast.todayForecast.visability + ' км'}</Td>
            </Tr>
            <Tr>
               <Td>Давление:</Td>
               <Td >{forecast.todayForecast.pressure + ' дюймов'}</Td>
               <Td isNumeric>УФ-индекс:</Td>
               <Td isNumeric>{forecast.todayForecast.uv}</Td>
            </Tr>
         </>
      )
   }
   
}