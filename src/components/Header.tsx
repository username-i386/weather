import { Box, Heading, Icon, Image, Show, Stack, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import logo from "../icons/logo.png"
import { FaGithub } from "react-icons/fa";
import { ChanegColorMode } from "./ChangeColorMode";
import { SearchBar } from "./SearchBar";
import { MobileSideBar } from "./MobileSideBar";

export const Header: FC = (): ReactElement => {

   const headerBg = useColorModeValue('white', 'gray.800');

   return (
      <Box as='header' position={'sticky'} top={0} zIndex={'sticky'} bg={headerBg}>
         <Stack direction={'row'} align={'center'} justify={'space-between'} spacing={4} p={2}>
            <Stack direction={"row"}>
               <Box>
                  <Image src={logo} w={'50px'} minW={['55px', '50px']} />
               </Box>
               <Show breakpoint="(min-width: 605px)">
                  <Heading>zeus</Heading>
               </Show>
            </Stack>
            <Box w={'70%'} >
               <SearchBar />
            </Box>
            <Stack direction={'row'}>
               <Box>
                  <ChanegColorMode sizeMode='small' />
               </Box>
               <Show breakpoint="(min-width: 605px)">
                  <Box as="a" href="#" target="_blank">
                     <Icon as={FaGithub} boxSize={7} />
                  </Box>
               </Show>
               <Show breakpoint="(max-width: 674px)">
                  <MobileSideBar />
               </Show>
            </Stack>
         </Stack>
      </Box>
   )
}