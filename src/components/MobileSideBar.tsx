import { useDisclosure, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Box } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { FaHamburger } from "react-icons/fa";
import { Settings } from "./Settings";


export const MobileSideBar: FC = (): ReactElement => {

   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Box>
         <Icon as={FaHamburger} onClick={onOpen} boxSize={6} />
         <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader borderBottomWidth='1px'>Zeus</DrawerHeader>
               <DrawerBody>
                  <Settings />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </Box>
   )
}