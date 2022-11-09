import React,{ useEffect } from 'react';
import MovieListing from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies } from '../../features/movies/movieSlice';


const Home = () => {
  const dispatch = useDispatch();
  //making the api call useEffect
    useEffect(()=>{
      dispatch(fetchAsyncMovies());
    },[dispatch])
  return (
    <>
      <div className="banner-img">
    </div>
    <MovieListing/>
    </>
    
  )
}

export default Home