import {FC, ReactElement, ReactNode} from "react";
import {Box, Image, Heading, Stack, useColorModeValue} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IHourlyForecastProps} from "../types/componentsProps";
import { IHourlyForecast } from "../types/apiResponses";
import { HourlyForecastList } from "./HourlyForecastList";


export const HourlyForecast: FC<IHourlyForecastProps> = ({ forecast, localTime }): ReactElement => {

    const amountHoursForecast = useSelector((state: RootState) => state.amountHours.hours);

    const hourlyForecastBg = useColorModeValue('gray.200', 'gray.700');

    const todayHourlyForecast: IHourlyForecast[] = [];
    forecast.days[0].hour.map((element, index) => {
        if (localTime) {
            if (index >= +localTime.time.hours) {
                if (todayHourlyForecast.length < amountHoursForecast) {
                    todayHourlyForecast.push(element);
                }
            }
        }
    })
    let itemsLimit = todayHourlyForecast.length;
    const tomorrowHourlyForecast: IHourlyForecast[] = [];
    forecast.days[1].hour.map((element, index) => {
        if (itemsLimit < amountHoursForecast) {
            tomorrowHourlyForecast.push(element);
            itemsLimit++;
        }
    })
    


    return (
        <Box rounded={'lg'} p={4} bg={hourlyForecastBg}>
            <Heading size={'lg'} mb={4}>Ежечасный прогноз:</Heading>
            <Stack direction={'column'}>
                <HourlyForecastList todayHourlyForecast={todayHourlyForecast} tomorrowHourlyForecast={tomorrowHourlyForecast} />
            </Stack>
        </Box>
    )
}