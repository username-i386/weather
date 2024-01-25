import { Box, Center, Collapse, Heading, Icon, Image, Show, Stack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import { FC, ReactElement } from "react"
import { ITodayForecastProps } from "../types/componentsProps"
import { TodayForecastMeteodataList } from "./TodayForecastMeteodataList";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useColorSheme } from "../hooks/useColorSheme";

export const TodayForecast: FC<ITodayForecastProps> = ({
   localTime,
   forecast,
}): ReactElement => {


   const [isSmallerThan674px] = useMediaQuery('(max-width: 674px)');

   const { isOpen, onToggle } = useDisclosure();


   const { colorShemeBg, colorShemeText } = useColorSheme(forecast.todayForecast.temperature);


   const date = (): string => {
      if (localTime) {
         return localTime.date.day + '.' +
            localTime.date.month + '.' + localTime.date.year
      } else return ''
   }




   return (
      <Box rounded={'lg'} p={4} bg={colorShemeBg} color={colorShemeText}>
         <Heading size={'lg'}>
            {
               localTime ? 'Прогноз погоды на ' + date() : ''
            }
         </Heading>
         <Stack direction={'row'} justify={'space-around'} align={'center'} wrap={'wrap'}>
            <Stack align={'center'}>
               <Stack direction={'row'} align={'center'}>
                  <Box minW={'50%'}>
                     <Image src={forecast.todayForecast.discription.img} w={'150px'} />
                  </Box>
                  <Text fontSize={['45px', '70px']} fontWeight={700} lineHeight={'normal'}>
                     {
                        forecast.todayForecast.temperature + 'C°'
                     }
                  </Text>
               </Stack>
               <Heading textAlign={'center'}>{forecast.todayForecast.discription.text}</Heading>
            </Stack>
            <Collapse in={isSmallerThan674px ? isOpen : true} animateOpacity>
               <TodayForecastMeteodataList forecast={forecast} />
            </Collapse>
         </Stack>
         <Show breakpoint="(max-width: 674px)">
            <Center mt={2}>
               <Icon as={isOpen ? IoMdArrowDropupCircle : IoMdArrowDropdownCircle}
                  boxSize={'50px'} 
                  onClick={onToggle} />
            </Center>
         </Show>
      </Box>
   )
}