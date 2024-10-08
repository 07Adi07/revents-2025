import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppUser } from "../../app/types/user";
import { User } from "firebase/auth";

type State = {
  authenticated: boolean;
  currentUser: AppUser | null;
  initialized: boolean;
};

const initialState: State = {
  authenticated: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: {
      reducer: (state, action: PayloadAction<AppUser>) => {
        state.authenticated = true;
        state.currentUser = action.payload;
        state.initialized = true;
      },
      prepare: (user: User) => {
        const mapped: AppUser = {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
          providerId: user.providerData[0].providerId,
        };
        return { payload: mapped };
      },
    },
    logout: (state) => {
      state.authenticated = false;
      state.currentUser = null;
      state.initialized = true;
    },
  },
});

export const { signIn, logout } = authSlice.actions;
