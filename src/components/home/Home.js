import React,{ useEffect } from 'react';
import MovieListing from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies } from '../../features/movies/movieSlice';


const Home = (props) => {
  console.log(props.location);
  const dispatch = useDispatch();
  //making the api call useEffect
    useEffect(()=>{
      dispatch(fetchAsyncMovies(props.location));
    },[dispatch, props.location])
  return (
    <>
      <div className="banner-img">
    </div>
    <MovieListing/>
    </>
    
  )
}

export default Home