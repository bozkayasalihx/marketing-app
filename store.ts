import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import counterSlice from "./features/counterSlice";
import productsSlice from "./features/productsSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        count: counterSlice,
        products: productsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
