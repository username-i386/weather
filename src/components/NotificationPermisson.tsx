import { Button, Text } from "@chakra-ui/react";
import { FC, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


export const NotificationPermission: FC = (): ReactElement => {

   const forecast = useSelector((state: RootState) => state.forecast.forecast);

   let notificationText: { discription: string; windSpeed: number; temperature: number; icon: string; };

   useEffect(() => {
      if (forecast) {
         notificationText = {
            windSpeed: forecast.todayForecast.wind.speed,
            temperature: forecast.todayForecast.temperature,
            discription: forecast.todayForecast.discription.text,
            icon: forecast.todayForecast.discription.img,
         }
      }
   }, [forecast])

   function requestPermission() {
      const notification = new Notification(notificationText.discription, {
         body: `Ветер ${notificationText.windSpeed} км/ч, температура ${notificationText.temperature} C°`,
         tag: 'weather forecast',
         icon: notificationText.icon,
      });
      if (!("Notification" in window)) {
         alert('Этот браузер не поддерживает уведомления!');
      } else if (Notification.permission === 'granted') {
         notification
      } else {
         Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
               notification
            }
         })
      }
   }


   return (
      <Button colorScheme="teal" variant='outline' onClick={requestPermission}>
         Отправить уведомление
      </Button>
   )
}