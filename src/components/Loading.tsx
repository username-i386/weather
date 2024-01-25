import { Spinner, Stack, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactElement } from "react";


export const Loading: FC = (): ReactElement => {

   const spinnerBg = useColorModeValue('gray.400', 'gray.200');

   return (
      <Stack justify={'center'} align={'center'} h={'100%'} w={'100%'}>
         <Spinner
            thickness='5px'
            speed='0.65s'
            emptyColor={spinnerBg}
            color='blue.500'
            size='xl'
         />
      </Stack>
   )
}