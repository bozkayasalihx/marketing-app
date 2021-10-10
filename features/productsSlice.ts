import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import request from "../connection/products";
// productName": "voluptates optio impedit",
//     "total": 45854,
//     "perPrice": "660.45",
//     "id": "1"

export interface Idata {
    productName: string;
    perPrice: string;
    total: string;
    id: string;
    uniqueId: string;
}
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const response = await request.get<Idata[]>("/Products");
    return response.data;
});

interface InitialState {
    data: Idata[];
    status?: "pending" | "rejected" | "fulfilled";
    error?: string;
}

const initialState: InitialState = {
    data: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data.push(...action.payload);
        });
    },
});

export default productsSlice.reducer;
