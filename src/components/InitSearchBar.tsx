import { Box, Heading, Icon, Stack } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { SearchBar } from "./SearchBar";
import { BsFillGeoAltFill } from "react-icons/bs";


export const InitSearchBar: FC = (): ReactElement => {
   return (
      <Stack h={'100%'} spacing={4}>
         <Heading size={['lg', '2xl']}>Укажите Ваше местоположение:</Heading>
         <Box p={4}>
            <SearchBar />
         </Box>
         <Stack justify={'center'} align={'center'}>
            <Icon as={BsFillGeoAltFill} boxSize={'60%'} />
         </Stack>
      </Stack>
   )
}