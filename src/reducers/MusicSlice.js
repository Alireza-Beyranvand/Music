

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { AllAllbum, AllMusic } from "../services/servicesMusic";



export const fetchMusics = createAsyncThunk("music/fetchMusics", async () => {
    const respons = await AllMusic();
    return respons.data;
})
export const fetchAllbum = createAsyncThunk("music/fetchAllbum", async () => {
    const respons = await AllAllbum();
    return respons.data;
})


const state = {
    musics: [],
    allbum: [],
    filtredMusics: [],
    status: "none",
    error: ""
}


const musicSlice = createSlice({
    name: "musics",
    initialState: state,
    reducers: {
        MusicFiltered: (state, action) => {
            const allbumId = action.payload;
            const filtred = state.musics.filter((music) => music.allbum === allbumId);
            if (filtred) {
                state.filtredMusics = filtred
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMusics.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchMusics.fulfilled, (state, action) => {
                state.status = "completed";
                state.musics = action.payload;
            })
            .addCase(fetchMusics.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchAllbum.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchAllbum.fulfilled, (state, action) => {
                state.status = "completed";
                state.allbum = action.payload;
            })
            .addCase(fetchAllbum.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});



//selectors
export const selectAllMusics = state => state.musics.musics;
export const selectAllAllbumes = state => state.musics.allbum;
export const selectStatusLoading = state => state.musics.status;
export const selectFilteredMusics = state => state.musics.filtredMusics;


// actions 
export const { MusicFiltered } = musicSlice.actions



export default musicSlice.reducer;