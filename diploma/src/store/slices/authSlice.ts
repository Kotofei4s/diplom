import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  name: string;
  lastName: string;
  login: string;
  password: string;
}

export interface AuthState {
  users: UserInfo[];
  activeUser: UserInfo | null;
}

const initialState: AuthState = {
  users: [],
  activeUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInfo>) => {
      state.users = [...state.users, action.payload];
    },
    setActiveUser: (state, action: PayloadAction<UserInfo | null>) => {
      state.activeUser = action.payload;
    },
  },
});

export const { addUser, setActiveUser } = authSlice.actions;
export default authSlice.reducer;
