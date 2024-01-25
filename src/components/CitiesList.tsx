import { Box } from "@chakra-ui/react"
import { FC, ReactElement } from "react"
import { ICitiesListProps } from "../types/componentsProps"
import { ISearchCityTransResponseElement } from "../types/apiResponses"
import { useDispatch } from "react-redux"
import { setCityName } from "../redux/slices/citySlice"



export const CitiesList: FC<ICitiesListProps> = ({ 
   searchCityResponse, 
   inputValue, 
   setInputValue, 
   isError, 
   isLoading,
}): ReactElement => {

   const dispatch = useDispatch();

   if (!searchCityResponse) return <></>
   if (!inputValue) return <></>
   if (isLoading) return <>load</>
   if (isError) return <>error</>

   const borderForElements = (indexElement: number): string => {
      if (searchCityResponse.cities.length !== indexElement + 1) {
         return '1px solid white';
      } else {
         return '';
      }
   }

   const changeCity = (locality: ISearchCityTransResponseElement): void => {
      dispatch(setCityName(locality.city));
      localStorage.setItem('city', locality.city);
      setInputValue('');
   }

   return (
         <Box color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md' 
            position={'absolute'}
            top={'40px'}
            left={0}
            w={'100%'}
            px={2}
            zIndex={999}>
            {
               searchCityResponse.cities.map((locality, index) => {
                  return (
                     <Box key={index}
                        cursor={'pointer'}
                        p={2}
                        borderBottom={borderForElements(index)}
                        onClick={() => changeCity(locality)}>
                           {locality.city + ', ' + locality.country}
                     </Box>
                  )
               })
            }
         </Box>
   )
}