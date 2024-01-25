import { Stack, Button, useColorMode, useColorModeValue, Icon } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunDimFill } from "react-icons/pi";
import { IChanegColorModeProps } from "../types/componentsProps";

const BIG = 'big';
const SMALL = 'small';

export const ChanegColorMode: FC<IChanegColorModeProps> = ({ sizeMode }): ReactElement => {

   const { colorMode, toggleColorMode } = useColorMode();

   const colorModeIcon = (colorMode === 'light') ? BsMoonStarsFill : PiSunDimFill
   if (sizeMode === BIG) {
      return (
         <Stack direction={'row'} spacing={2}>
            <Button colorScheme="teal" variant='outline' w={'full'} onClick={toggleColorMode}>
               Включить {
                  (colorMode === 'light') ? ' темную ' : ' светлую '
               } тему
            </Button>
         </Stack>
      )
   } else if (sizeMode === SMALL){
      return <Icon as={colorModeIcon} boxSize={8} onClick={toggleColorMode} ml={2} />
   } else return <></>


}