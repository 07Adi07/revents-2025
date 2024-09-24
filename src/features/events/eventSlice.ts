import { PayloadAction } from "@reduxjs/toolkit";
import { AppEvent } from "../../app/types/event";
import { Timestamp } from "firebase/firestore";
import {
  GenericActions,
  GenericState,
  createGenericSlice,
} from "../../app/store/genericSlice";
import { auth } from "../../app/config/firebase";
import { newDate } from "react-datepicker/dist/date_utils";

type State = {
  data: AppEvent[];
  loadedInitial: false;
};

const initialState: State = {
  data: [],
};

export const eventSlice = createGenericSlice({
  name: "events",
  initialState: initialState as GenericState<AppEvent[]>,
  reducers: {
    success: {
      reducer: (state, action: PayloadAction<AppEvent[]>) => {
        state.data =removeDuplicates ([...action.payload, ...state.data]);
        state.status = "finished";
        state.loadedInitial = true;
      },
      prepare: (events: any) => {
        let eventArray: AppEvent[] = [];
        Array.isArray(events) ? (eventArray = events) : eventArray.push(events);
        const mapped = eventArray.map((e: any) => {
          return {
            ...e,
            date: (e.date as Timestamp).toDate().toISOString(),
            isHost: auth.currentUser?.uid === e.hostUid,
            isGoing: e.attendeeIds.include(auth.currentUser?.uid),
          };
        });
        return { payload: mapped };
      },
    },
  },
});

export const actions = eventSlice.actions as GenericActions<AppEvent[]>;


function removeDuplicates (events: AppEvent[]{
  return Array.from(new Set(events
    .map (x => x.id)))
    .map(id => eventSlice.find(a => a.id === id ) as AppEvent)
    .sort((a,b) => new Date(a?.date).getTime() - newDate(b.date).getTime())
})