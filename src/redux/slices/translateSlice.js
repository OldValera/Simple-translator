import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";

export const translateRequest = createAsyncThunk('translate/requestState', async (value) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Hello, world!");
    encodedParams.append("target", "ru");
    encodedParams.append("source", "en");

    const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'c9c78f6fd2msh549a3cc43e7210ep13b2a8jsn32765281bda6',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        data: `{"q":"${value}","sourse":"ru","target":"en"}`
    };

    const request = axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return request;
})

const initialState = {

    translatedText: '',
    status: 'loading'

}
const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {

    },
    extraReducers: {
        [translateRequest.pending]: (state) => {
            state.status = 'loading'
            state.translatedText = '';
        },
        [translateRequest.fulfilled]: (state, action) => {
            state.status = 'loaded'
            // console.log(action.payload)
            state.translatedText = action.payload.data.translations.translatedText;

        },
        [translateRequest.rejected]: (state) => {
            state.status = 'error'
            state.translatedText = '';
        },

    }
})
export default translateSlice.reducer;







