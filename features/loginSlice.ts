import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    user: Record<string, string>;
    admin: Record<string, string>;
}

const initialState: InitialState = {
    user: {},
    admin: {},
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state, action: PayloadAction<InitialState["user"]>) {
            state.user = action.payload;
            
        },
        logout(state, action) {
            
        },
    },
});
