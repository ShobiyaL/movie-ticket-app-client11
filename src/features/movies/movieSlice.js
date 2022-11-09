import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const response = await axios.get("https://movie-ticket-app-server.herokuapp.com/api/movie/")
          .catch((err)=>{
            console.log("Error: ",err)
          })
        //   console.log(response);
         return response.data;
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail',async(id)=>{
    const response = await axios.get(`https://movie-ticket-app-server.herokuapp.com/api/movie/${id}`)
          .catch((err)=>{
            console.log("Error: ",err)
          })
        //   console.log(response)
         return response.data;
})


const initialState = {
    movies: {},
    selectMovie: {},
  };

  const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectMovie = {};
          },
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectMovie: payload };
      }
      
    },
  });
  

export const { removeSelectedMovie } = movieSlice.actions;


export const getSelectedMovie = (state) => state.movies.selectMovie;

export const getAllMovies = (state)=>state.movies.movies
// export const getSelectedMovie = (state)=>state.movies.selectedMovie
export default movieSlice.reducer




  



