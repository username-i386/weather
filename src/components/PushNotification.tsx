import { FC, ReactElement } from 'react';
import { IPushNotificationProps } from '../types/componentsProps';


export const PushNotification: FC<IPushNotificationProps> = ({ forecast }): ReactElement => {

   const notificationText = {
      windSpeed: forecast.todayForecast.wind.speed,
      temperature: forecast.todayForecast.temperature,
      discription: forecast.todayForecast.discription.text,
      icon: forecast.todayForecast.discription.img,
   }

   function createNotification() {
      if (Notification.permission === 'granted') {
         new Notification(notificationText.discription, {
            body: `Ветер ${notificationText.windSpeed} км/ч, температура ${notificationText.temperature} C°`,
            tag: 'weather forecast',
            icon: notificationText.icon,
         });

      }
   }
   
   setInterval(() => {
      createNotification()
   }, 28800000);
   

   return <></>
}  