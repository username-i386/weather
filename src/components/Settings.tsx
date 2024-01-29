import { Box, Stack, Highlight, Button, Collapse, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { ColorChange } from "./ColorChange";
import { ChanegColorMode } from "./ChangeColorMode";
import { SearchBar } from "./SearchBar";
import { ChangeAmountHourlyForecast } from "./ChangeAmountHourlyForecast";
import { NotificationPermission } from "./NotificationPermisson";


export const Settings: FC = (): ReactElement => {

   const cardBg = useColorModeValue('gray.100', 'gray.600');
   const textColor = useColorModeValue('black', 'white');



   const { isOpen: isOpenWarmColorsTable, onToggle: onToggleWarmColorsTable } = useDisclosure();
   const { isOpen: isOpenColdColorsTable, onToggle: onToggleColdColorsTable } = useDisclosure();

   const warmColors = ['red', 'orange', 'yellow', 'green'];
   const coldColors = ['teal', 'blue', 'cyan', 'purple'];
   const colorVariants = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

   return (
      <Box>
         <Stack spacing={4}>
            <Stack p={2} bg={cardBg} rounded={'lg'}>
               <Text>Выбор города:</Text>
               <SearchBar />
            </Stack>
            <Stack p={2} bg={cardBg} rounded={'lg'}>
               <Text>
                  <Highlight query={"положительной"}
                     styles={{ fontWeight: 'bold', color: textColor, textDecoration: 'underline' }}>
                     Выбрать цвет карточек с положительной температурой:
                  </Highlight>
               </Text>
               <Button onClick={onToggleWarmColorsTable} colorScheme="teal" variant='outline'>
                  {
                     isOpenWarmColorsTable ? 'Скрыть ' : 'Показать '
                  }
                  таблицу цветов
               </Button>
               <Collapse in={isOpenWarmColorsTable} animateOpacity>
                  <ColorChange colors={warmColors}
                     colorVariants={colorVariants}
                     isWarm={true}
                     onToggle={onToggleWarmColorsTable} />
               </Collapse>
            </Stack>
            <Stack p={2} bg={cardBg} rounded={'lg'}>
               <Text>
                  <Highlight query={"отрицательной"}
                     styles={{ fontWeight: 'bold', color: textColor, textDecoration: 'underline' }}>
                     Выбрать цвет карточек с отрицательной температурой:
                  </Highlight>
               </Text>
               <Button onClick={onToggleColdColorsTable} colorScheme="teal" variant='outline'>
                  {
                     isOpenColdColorsTable ? 'Скрыть ' : 'Показать '
                  }
                  таблицу цветов
               </Button>
               <Collapse in={isOpenColdColorsTable} animateOpacity>
                  <ColorChange
                     colors={coldColors}
                     colorVariants={colorVariants}
                     isWarm={false}
                     onToggle={onToggleColdColorsTable} />
               </Collapse>
            </Stack>
            <ChangeAmountHourlyForecast />
            <Stack p={2} bg={cardBg} rounded={'lg'}>
               <Text>Тема приложния?</Text>
               <ChanegColorMode sizeMode="big" />
            </Stack>
            <Stack p={2} bg={cardBg} rounded={'lg'}>
               <NotificationPermission />
            </Stack>
         </Stack>
      </Box>
   )
}