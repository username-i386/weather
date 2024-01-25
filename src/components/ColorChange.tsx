import { Box, SimpleGrid } from "@chakra-ui/react"
import { FC, ReactElement, ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setColdColorSheme, setColdColorText, setWarmColorSheme, setWarmColorText } from "../redux/slices/colorShemeSlice"
import { RootState } from "../redux/store"
import { IColorChangeProps } from "../types/componentsProps"

const SELECTED_ITEM_BORDER = '3px solid black';

export const ColorChange: FC<IColorChangeProps> = ({
   colors,
   colorVariants,
   isWarm,
   onToggle,
}): ReactElement => {

   const dispatch = useDispatch();

   const colorSheme = useSelector((state: RootState) => {
      if (isWarm) {
         return state.colorSheme.colorShemeForWarmTemp
      } else {
         return state.colorSheme.colorShemeForColdTemp
      }
   });

   const changeColorSheme = (color: string, colorVariant: number): void => {
      const colorSheme = color + '.' + colorVariant;
      if (isWarm) {
         dispatch(setWarmColorSheme(colorSheme));
         localStorage.setItem('warmColorSheme', colorSheme);
         if (colorVariant < 500) {
            dispatch(setWarmColorText('black'));
            localStorage.setItem('textWarmColor', 'black');
         } else {
            dispatch(setWarmColorText('white'));
            localStorage.setItem('textWarmColor', 'white');
         }
      } else {
         dispatch(setColdColorSheme(colorSheme));
         localStorage.setItem('coldColorSheme', colorSheme);
         if (colorVariant < 500) {
            dispatch(setColdColorText('black'));
            localStorage.setItem('textColdColor', 'black');
         } else {
            dispatch(setColdColorText('white'));
            localStorage.setItem('textColdColor', 'white');
         }
      }
      onToggle();
   }


   return (
      <SimpleGrid columns={4} spacing={4} justifyItems={'center'}>
         {
            colorVariants.map((colorVariant): ReactNode => {
               return (
                  colors.map((color, i): ReactNode => {
                     return (
                        <Box key={i}
                           rounded={'full'}
                           bg={`${color}.${colorVariant}`}
                           boxSize={8}
                           border={(colorSheme === color + '.' + colorVariant) ? SELECTED_ITEM_BORDER : ''}
                           onClick={() => changeColorSheme(color, colorVariant)} />
                     )
                  })
               )
            })
         }
      </SimpleGrid>
   )
}