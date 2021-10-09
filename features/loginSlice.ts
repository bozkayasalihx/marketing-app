import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    user?: Record<string, string>;
    admin?: Record<string, string>;
}

const initialState: InitialState = {
    user: {},
    admin: {},
};

type PayloadType = PayloadAction<Partial<InitialState>, string>;

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state, action: PayloadType) {
            if (action.type === "ADMIN") {
                state.admin = action.payload.admin;
            }
            state.user = action.payload.user;
        },
        logout(state, action: PayloadType) {
            if (action.type === "ADMIN") {
                state.admin = action.payload.admin;
            }
            state.user = action.payload.user;
        },
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
