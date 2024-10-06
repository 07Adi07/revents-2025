import {
  createGenericSlice,
  GenericState,
} from "../../../app/store/genericSlice";
import { Follow } from "../../../app/types/profile";

type State = {
  data: Follow[];
};

const initialState: State = {
  data: [],
};

export const feedSlice = createGenericSlice({
  name: "follow",
  initialState: initialState as GenericState<Follow[]>,
  reducers: {},
});
