import { Show } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { Settings } from "./Settings";


export const SideBar: FC = (): ReactElement => {
   return (
      <Show breakpoint="(min-width: 675px)">
         <Settings />
      </Show>
   )
} 