import { Box, Collapse, Heading, Icon, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { IHourlyForecastItemProps } from "../types/componentsProps";
import { PiWindFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const HourlyForecastItem: FC<IHourlyForecastItemProps> = ({ currentHoyrlyForecast, isFirstItem }): ReactElement => {

   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isFirstItem });


   const colorSheme = () => {
      if (currentHoyrlyForecast.temp_c >= 0) {
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

   return (
      <>
         <Box bg={colorSheme().bg}
            color={colorSheme().text}
            rounded={'lg'}
            p={2}
            cursor={'pointer'}
            userSelect={'none'}
            onClick={onToggle}>
            <Stack direction={'column'}>
               <Text>{currentHoyrlyForecast.time.split(' ')[1]}</Text>
               <Stack direction={'column'} align={'center'}>
                  <Stack direction={'row'} align={'center'}>
                     <Image src={currentHoyrlyForecast.condition.icon} />
                     <Collapse in={isOpen} transition={{ enter: { duration: 0.5 } }}>
                        <Heading>{currentHoyrlyForecast.temp_c + 'C°'}</Heading>
                     </Collapse>
                  </Stack>
                  <Collapse in={isOpen} transition={{ enter: { duration: 0.5 } }}>
                     <Text textAlign={'center'}>{currentHoyrlyForecast.condition.text}</Text>
                     <Stack direction={'column'} align={'center'}>
                        <Stack direction={'row'} align={'center'}>
                           <Icon as={PiWindFill} boxSize={6} />
                           <Text>{currentHoyrlyForecast.wind_kph + ' км/ч'}</Text>
                        </Stack>
                     </Stack>
                  </Collapse>
               </Stack>
            </Stack>
         </Box>
      </>
   )
}