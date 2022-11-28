import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import translateSlice from "./slices/translateSlice";
const fetchTranslate = createAsyncThunk('translate/requestStatus', async () => {

})
export const store = configureStore({
    reducer: {
        translate: translateSlice
    }
})