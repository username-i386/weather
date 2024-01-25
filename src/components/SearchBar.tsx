import { Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { FC, ReactElement, useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useSearchCityQuery } from "../redux/api/weatherApi";
import { CitiesList } from "./CitiesList";


export const SearchBar: FC = (): ReactElement => {

   const [inputValue, setInputValue] = useState<string>('');

   const [request, setRequest] = useState({
      title: '',
      skip: true,
   });


   useEffect(() => {
      if (inputValue) {
         setRequest({
            title: inputValue,
            skip: false,
         })
      } 
   }, [inputValue])
   
   const { data, isLoading, isError } = useSearchCityQuery(request.title, {
      skip: request.skip,
   })


   function changeInput(event: React.ChangeEvent<HTMLInputElement>): void {
      setInputValue(event.target.value);
   }

   return (
      <Box position={'relative'}>
         <InputGroup>
            <Input size='lg' 
               borderColor={'gray.400'} 
               placeholder='Введите название населенного пункта...'
               value={inputValue}
               onChange={event => changeInput(event)} />
            <InputRightElement>
               <FaSearchLocation />
            </InputRightElement>
         </InputGroup>
         <CitiesList searchCityResponse={data} 
            inputValue={inputValue}
            setInputValue={setInputValue} 
            setRequest={setRequest}
            isLoading={isLoading}
            isError={isError} />
      </Box>
   )
}