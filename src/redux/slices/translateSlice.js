import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const translateRequest = createAsyncThunk('translate/requestState', (value) => {

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
        data: `{"q":"${value.txt}","sourse":"${value.leng}","target":"${value.transTo}"}`
    };
    const request = axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return request;
})

const initialState = {

    activeLenguage: 'en',
    translateTo: 'ru',
    currentText: '',
    translatedText: '',
    status: '',
    favoirets: {
        items: []
    }

}
const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setActivelenguage(state, action) {
            state.activeLenguage = action.payload
        },
        setTranslateLenguage(state, action) {
            state.translateTo = action.payload
        },
        saveFavouireteWord(state, action) {
            state.favoirets.items.push(action.payload)
        }

    },
    extraReducers: {
        [translateRequest.pending]: (state) => {
            state.status = 'loading'
            state.translatedText = '';
        },
        [translateRequest.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.translatedText = action.payload.data.translations.translatedText;
            state.currentText = action.meta.arg.txt;
            console.log(state)
        },
        [translateRequest.rejected]: (state) => {
            state.status = 'error'
            state.translatedText = '';
        },

    }
})

export default translateSlice.reducer;
export const { setActivelenguage, setTranslateLenguage, saveFavouireteWord } = translateSlice.actions;







