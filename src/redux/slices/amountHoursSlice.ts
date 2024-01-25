import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IAmountHoursSliceState } from "../../types/reducerStates"


const initialState: IAmountHoursSliceState = {
   hours: 24, 
}

export const amountHoursSlice = createSlice({
   name: 'amountHoursSlice',
   initialState,
   reducers: {
      setAmountHours: (state: IAmountHoursSliceState, action: PayloadAction<number>): void => {
         state.hours = action.payload
      },
   }
})

export const { setAmountHours } = amountHoursSlice.actions;

export default amountHoursSlice.reducer;