import { FC, ReactElement, ReactNode } from "react";
import { IDailyForecastProps } from "../types/componentsProps";
import { Box, Heading, Icon, Image, Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { PiWindFill } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";


export const DailyForecast: FC<IDailyForecastProps> = ({ forecast }): ReactElement => {

   const hourlyForecastBg = useColorModeValue('gray.200', 'gray.700');

   const colorSheme = (temperature: number) => {
      if (temperature >= 0) {
         return {
            bg: useSelector((state: RootState) => state.colorSheme.colorShemeForWarmTemp),
            text: useSelector((state: RootState) => state.colorSheme.colorTextForWarmTemp),
         }
      } else {
         return {
            bg: useSelector((state: RootState) => state.colorSheme.colorShemeForColdTemp),
            text: useSelector((state: RootState) => state.colorSheme.colorTextForColdTemp),
         }
      }
   } 
   
   const dailyForecast = forecast.days;

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
               dailyForecast.map((element, index): ReactNode => {
                  const date = formatedLocalTime(element.date)
                  return (
                     <Box key={index} 
                        bg={colorSheme(element.day.avgtemp_c).bg}
                        color={colorSheme(element.day.avgtemp_c).text} 
                        rounded={'lg'}
                        p={2}>
                        <Text>{date.day + '.' + date.month + '.' + date.year}</Text>
                        <Stack spacing={1}>
                           <Stack direction={'row'} align={'center'} justify={'center'}>
                              <Image src={element.day.condition.icon} />
                              <Heading>{element.day.avgtemp_c + 'C°'}</Heading>
                           </Stack>
                           <Text textAlign={'center'} mb={2}>{element.day.condition.text}</Text>
                           <Stack direction={'row'} align={'center'} justify={'space-around'}>
                              <Tooltip hasArrow label='Минимальная температура' bg='gray.300' color='black'>
                                 <Stack direction={'row'} align={'center'}>
                                    <Icon as={FaTemperatureArrowDown} />
                                    <Text>{element.day.mintemp_c + 'C°'}</Text>
                                 </Stack>
                              </Tooltip>
                              <Tooltip hasArrow label='Максимальная температура' bg='gray.300' color='black'>
                                 <Stack direction={'row'} align={'center'}>
                                    <Icon as={FaTemperatureArrowUp} />
                                    <Text>{element.day.maxtemp_c + 'C°'}</Text>
                                 </Stack>
                              </Tooltip>
                           </Stack>
                           <Stack direction={'row'} align={'center'} justify={'space-around'}>
                              <Tooltip hasArrow label='Вероятность дождя' bg='gray.300' color='black'>
                                 <Stack direction={'row'} align={'center'} justify={'center'}>
                                    <Icon as={BsCloudRainHeavyFill} />
                                    <Text>{element.day.daily_chance_of_rain + '%'}</Text>
                                 </Stack>
                              </Tooltip>
                              <Tooltip hasArrow label='Вероятность снега' bg='gray.300' color='black'>
                                 <Stack direction={'row'} align={'center'} justify={'center'}>
                                    <Icon as={FaRegSnowflake} />
                                    <Text>{element.day.daily_chance_of_snow + '%'}</Text>
                                 </Stack>
                              </Tooltip>
                           </Stack>
                           <Tooltip hasArrow label='Максимальная скорость ветра' bg='gray.300' color='black'>
                              <Stack direction={'row'} align={'center'} justify={'center'}>
                                 <Icon as={PiWindFill} />
                                 <Text>{element.day.maxwind_kph + ' км/ч'}</Text>
                              </Stack>
                           </Tooltip>
                           <Tooltip hasArrow label='Влажность' bg='gray.300' color='black'>
                              <Stack direction={'row'} align={'center'} justify={'center'}>
                                 <Icon as={WiHumidity} />
                                 <Text>{element.day.avghumidity + '%'}</Text>
                              </Stack>
                           </Tooltip>
                        </Stack>
                     </Box>
                  )
               })
            }
         </Stack>
      </Box>
   )
}