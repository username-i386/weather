import { Box, Collapse, Heading, Icon, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { IHourlyForecastItemProps } from "../types/componentsProps";
import { PiWindFill } from "react-icons/pi";
import { useColorSheme } from "../hooks/useColorSheme";

export const HourlyForecastItem: FC<IHourlyForecastItemProps> = ({ currentHoyrlyForecast, isFirstItem }): ReactElement => {

   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isFirstItem });

   const { colorShemeBg, colorShemeText } = useColorSheme(currentHoyrlyForecast.temp_c);

   return (
      <>
         <Box bg={colorShemeBg}
            color={colorShemeText}
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