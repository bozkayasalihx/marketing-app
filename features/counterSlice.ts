import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    count: number;
}

const initialState: InitialState = {
    count: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            if (state.count > 0) {
                state.count--;
            }

            state.count;
        },
    },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
