import { Button, Text } from "@chakra-ui/react";
import { FC, ReactElement } from "react";


export const NotificationPermission: FC = (): ReactElement => {

   function requestPermission() {
      if (!("Notification" in window)) {
         alert('Этот браузер не поддерживает уведомления!');
      } else if (Notification.permission === 'granted') {
         alert('Отправка уведомлений уже разрешена')
      } else {
         Notification.requestPermission()
      }
   }


   return (
      <Button colorScheme="teal" variant='outline' onClick={requestPermission}>
         Разрешить отправку уведомлений
      </Button>
   )
}