import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (location) => {
  console.log(location);
  if (location == '') {
    location = 'namakkal';
  }
  const response = await axios.get(`https://movie-ticket-app-server.herokuapp.com/api/theater/cityName/${location}`)
    .catch((err) => {
      console.log("Error: ", err)
    })
  console.log(response);
  console.log(response.data.val);
  let val = response.data.val;
  let movData = [];
  for (let i = 0; i < val.length && val[i]['movieId'] != undefined; i++) {
    console.log(val[i]['movieId']);
    movData.push(val[i]['movieId']);
  }
  console.log({ 'movies': movData });
  let currentStatus = movData.length > 0 ? 'success' : 'failure';

  return { status: currentStatus, 'movies': movData };
})

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (id) => {
  const response = await axios.get(`https://movie-ticket-app-server.herokuapp.com/api/movie/${id}`)
    .catch((err) => {
      console.log("Error: ", err)
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

export const getAllMovies = (state) => state.movies.movies
// export const getSelectedMovie = (state)=>state.movies.selectedMovie
export default movieSlice.reducer








