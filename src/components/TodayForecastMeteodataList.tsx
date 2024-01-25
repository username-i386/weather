import { TableContainer, Table, TableCaption, Tbody, useMediaQuery } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { ITodayForecastMeteodataListProps } from "../types/componentsProps";
import { TodayForecastMeteodataItems } from "./TodayForecastMeteodataItems";
import { useColorSheme } from "../hooks/useColorSheme";


export const TodayForecastMeteodataList: FC<ITodayForecastMeteodataListProps> = ({ forecast }): ReactElement => {

   const [isSmallerThan775px] = useMediaQuery('(max-width: 775px)');
   const [isSmallerThan674px] = useMediaQuery('(max-width: 674px)');
   const [isSmallerThan473px] = useMediaQuery('(max-width: 473px)');
   const [isSmallerThan350px] = useMediaQuery('(max-width: 350px)');
   
   const tableSize = () => {
      if (isSmallerThan473px) {
         return 'sm'
      } else if (isSmallerThan674px) {
         return 'md'
      } else if (isSmallerThan775px) {
         return 'sm'
      } else {
         return 'md'
      }
   }

   const { colorShemeText } = useColorSheme(forecast.todayForecast.temperature);

   return (
      <TableContainer >
         <Table variant='simple' colorScheme='teal' size={tableSize()}>
            <TableCaption color={colorShemeText}>♥ Пожалуйста, берегите себя ♥</TableCaption>
            <Tbody textTransform={isSmallerThan350px ? 'none' : 'uppercase'} 
               fontWeight={isSmallerThan350px ? '' : 600}>
               <TodayForecastMeteodataItems forecast={forecast} />
            </Tbody>
         </Table>
      </TableContainer>
   )
}