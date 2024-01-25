import { Box, Stack, Heading, Tooltip, Icon, Image, Text } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { PiWindFill } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { IDailyForecastCardProps } from "../types/componentsProps";
import { useColorSheme } from "../hooks/useColorSheme";


export const DailyForecastCard: FC<IDailyForecastCardProps> = ({ date, forecast }): ReactElement => {

   const { colorShemeBg, colorShemeText } = useColorSheme(forecast.day.avgtemp_c);

   return (
      <Box bg={colorShemeBg}
         color={colorShemeText}
         rounded={'lg'}
         p={2}>
         <Text>{date.day + '.' + date.month + '.' + date.year}</Text>
         <Stack spacing={1}>
            <Stack direction={'row'} align={'center'} justify={'center'}>
               <Image src={forecast.day.condition.icon} />
               <Heading>{forecast.day.avgtemp_c + 'C°'}</Heading>
            </Stack>
            <Text textAlign={'center'} mb={2}>{forecast.day.condition.text}</Text>
            <Stack direction={'row'} align={'center'} justify={'space-around'}>
               <Tooltip hasArrow label='Минимальная температура' bg='gray.300' color='black'>
                  <Stack direction={'row'} align={'center'}>
                     <Icon as={FaTemperatureArrowDown} />
                     <Text>{forecast.day.mintemp_c + 'C°'}</Text>
                  </Stack>
               </Tooltip>
               <Tooltip hasArrow label='Максимальная температура' bg='gray.300' color='black'>
                  <Stack direction={'row'} align={'center'}>
                     <Icon as={FaTemperatureArrowUp} />
                     <Text>{forecast.day.maxtemp_c + 'C°'}</Text>
                  </Stack>
               </Tooltip>
            </Stack>
            <Stack direction={'row'} align={'center'} justify={'space-around'}>
               <Tooltip hasArrow label='Вероятность дождя' bg='gray.300' color='black'>
                  <Stack direction={'row'} align={'center'} justify={'center'}>
                     <Icon as={BsCloudRainHeavyFill} />
                     <Text>{forecast.day.daily_chance_of_rain + '%'}</Text>
                  </Stack>
               </Tooltip>
               <Tooltip hasArrow label='Вероятность снега' bg='gray.300' color='black'>
                  <Stack direction={'row'} align={'center'} justify={'center'}>
                     <Icon as={FaRegSnowflake} />
                     <Text>{forecast.day.daily_chance_of_snow + '%'}</Text>
                  </Stack>
               </Tooltip>
            </Stack>
            <Tooltip hasArrow label='Максимальная скорость ветра' bg='gray.300' color='black'>
               <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Icon as={PiWindFill} />
                  <Text>{forecast.day.maxwind_kph + ' км/ч'}</Text>
               </Stack>
            </Tooltip>
            <Tooltip hasArrow label='Влажность' bg='gray.300' color='black'>
               <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Icon as={WiHumidity} />
                  <Text>{forecast.day.avghumidity + '%'}</Text>
               </Stack>
            </Tooltip>
         </Stack>
      </Box>
   )
}