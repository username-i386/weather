import { Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmountHours } from "../redux/slices/amountHoursSlice";
import { RootState } from "../redux/store";


export const ChangeAmountHourlyForecast: FC = (): ReactElement => {

   const dispatch = useDispatch();

   const cardBg = useColorModeValue('gray.100', 'gray.600');

   const amountHoursForecast = useSelector((state: RootState) => state.amountHours.hours);

   useEffect(() => {
      const changeAmountDaysBtnsNodeList = document.querySelectorAll<HTMLButtonElement>('.changeAmountHoursBtn');
      const changeAmountDaysBtns = Array.from(changeAmountDaysBtnsNodeList);
      changeAmountDaysBtns.map((e: HTMLButtonElement) => {
         if (+e.value === +amountHoursForecast) {
            e.style.border = '1px solid black';
         } else {
            e.style.border = '';
         }
      })
   }, [amountHoursForecast])

   function setHourForecast(event: React.MouseEvent<HTMLButtonElement>) {
      const target = event.target as HTMLButtonElement;
      const buttonValue: string = target.value;
      dispatch(setAmountHours(+buttonValue));
      localStorage.setItem('numberOfHours', buttonValue);
   }

   return (
      <Stack p={2} bg={cardBg} rounded={'lg'}>
         <Text>На сколько часов вперед показывать прогноз?</Text>
         <Stack direction={'row'} >
            <Button className="changeAmountHoursBtn" 
               w={'100%'}
               colorScheme='teal'
               variant='outline' 
               value={6} 
               onClick={e => setHourForecast(e)}>
                  6
            </Button>
            <Button className="changeAmountHoursBtn" 
               w={'100%'}
               colorScheme="teal" 
               variant='outline' 
               value={12} 
               onClick={e => setHourForecast(e)}>
                  12
            </Button>
            <Button className="changeAmountHoursBtn" 
               w={'100%'}
               colorScheme="teal" 
               variant='outline' 
               value={18} 
               onClick={e => setHourForecast(e)}>
                  18
            </Button>
            <Button className="changeAmountHoursBtn" 
               w={'100%'}
               colorScheme="teal" 
               variant='outline' 
               value={24} 
               onClick={e => setHourForecast(e)}>
                  24
            </Button>
         </Stack>
      </Stack>
   )
}