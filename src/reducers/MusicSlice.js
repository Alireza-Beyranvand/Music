

import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { AllMusic } from "../services/servicesMusic";



export const fetchMusics = createAsyncThunk("music/fetchMusics" , async () => {
    const respons = await AllMusic();
    return respons.data;
})



const state = {
    musics : [] ,
    status : "none" ,
    error : ""
}


const musicSlice = createSlice({
    name : "musics" ,
    initialState : state ,
    reducers : {

    } ,
    extraReducers : builder => {
        builder
        .addCase(fetchMusics.pending , (state , action) => {
            state.status = "loading";
        })
        .addCase(fetchMusics.fulfilled , (state , action) => {
            state.status = "completed";
            state.musics = action.payload;
        })
        .addCase(fetchMusics.rejected , (state , action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});



//selectors
export const selectAllMusics = state => state.musics.musics;
export const selectStatusLoading = state => state.musics.status;


export default musicSlice.reducer;