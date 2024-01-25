import { FC, ReactElement, useEffect } from "react";
import { Header } from "./Header";
import { WeatherForecast } from "./WeatherForecast";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { useDispatch } from "react-redux";
import { setColdColorSheme, setColdColorText, setWarmColorSheme, setWarmColorText } from "../redux/slices/colorShemeSlice";
import { setCityName } from "../redux/slices/citySlice";
import { setAmountHours } from "../redux/slices/amountHoursSlice";

export const App: FC = (): ReactElement => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('warmColorSheme')) {
      dispatch(setWarmColorSheme(localStorage.warmColorSheme));
    }

    if (localStorage.getItem('coldColorSheme')) {
      dispatch(setColdColorSheme(localStorage.coldColorSheme));
    }

    if (localStorage.getItem('textWarmColor')) {
      dispatch(setWarmColorText(localStorage.textWarmColor));
    }

    if (localStorage.getItem('textColdColor')) {
      dispatch(setColdColorText(localStorage.textColdColor));
    }

    if (localStorage.getItem('city')) {
      dispatch(setCityName(localStorage.city));
    }

    if (localStorage.getItem('numberOfHours')) {
      dispatch(setAmountHours(localStorage.numberOfHours));
    }
  }, []);

  const [isSmallerThan1205px] = useMediaQuery('(max-width: 1205px)');
  const [isSmallerThan775px] = useMediaQuery('(max-width: 775px)');
  const [isSmallerThan674px] = useMediaQuery('(max-width: 674px)');

  function columnsGrid(): string {
    if (isSmallerThan674px) {
      return '0 1fr';
    } else if (isSmallerThan775px) {
      return '40% 1fr';
    } else if(isSmallerThan1205px) {
      return '30% 1fr';
    }  else {
      return '20% 1fr'
    }
  }

  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={'67px 1fr'}
        gridTemplateColumns={columnsGrid()}
        h={'100vh'}
        gap='1'>
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        <GridItem area={'nav'} overflow={'auto'} px={2}>
          <SideBar />
        </GridItem>
        <GridItem area={'main'} overflow={'auto'} px={2} pb={2}>
          <WeatherForecast />
        </GridItem>
      </Grid>
    </>
  );
}