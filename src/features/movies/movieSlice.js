import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (location) => {
  console.log(location);
  if (location == '') {
    location = 'coimbatore';
  }
  const response = await axios.get(`https://movie-ticket-app-server.herokuapp.com/api/theater/cityName/${location}`)
    .catch((err) => {
      console.log("Error: ", err)
    })
  console.log(response);
  console.log(response.data.val);
  let val = response.data.val;
  let movData = [];
  let selectTheaters = {};
  for (let i = 0; i < val.length && val[i]['movieId'] != undefined; i++) {
    console.log(val[i]['movieId']);
    movData.push(val[i]['movieId']);
  }
  for (let i = 0; i < val.length ; i++) {
    console.log(val[i]['_id']);
    console.log(val[i]['name']);
    let tId = val[i]['_id'];
    let tname = val[i]['name'];
    selectTheaters[tId] = tname;
    // selectTheaters.push({ tId: tname});
    console.log(selectTheaters);
  }
  console.log({ 'movies': movData });
  let currentStatus = movData.length > 0 ? 'success' : 'failure';

  return { status: currentStatus, 'movies': movData, 'selectedTheaters': selectTheaters };
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
  selectedTheaters:{}
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
      // console.log("Fetched Successfully2!", payload);
      return { ...state, movies: payload, selectedTheaters: payload.selectedTheaters };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      
      console.log("Fetched Successfully!", payload);
      return { ...state, selectMovie: payload };
    }

  },
});


export const { removeSelectedMovie } = movieSlice.actions;


export const getSelectedMovie = (state) => state.movies.selectMovie;

export const getAllMovies = (state) => state.movies.movies

export const getAllTheaters = (state) => {
  console.log('called');
  console.log(state.movies.selectedTheaters);
  return state.movies.selectedTheaters;
}
// export const getSelectedMovie = (state)=>state.movies.selectedMovie
export default movieSlice.reducer








