import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        PopularMovies:null,
        trandingMovies:null,
        upcomingMovies:null,
        tvShows:null,
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
              state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrandingMovies:(state,action)=>{
            state.trandingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTvshow:(state,action)=>{
            state.tvShows=action.payload;
        },
     
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies, addTrandingMovies,addUpcomingMovies,addTvshow} = movieSlice.actions;
export default movieSlice.reducer;