import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import history from './history';

import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MovieScreen from './components/MovieScreen/MovieScreen';
import { ShowList } from './components/ShowList/ShowList';
import SeatBooking from './components/SeatBooking/SeatBooking';
import { Status } from './components/Status/Status';


function App() {
  const [userData, setUserData] = useState({'loggedIn': false, 'userName': 'abc', 'timeOut': '' }); 
  const [shows, setShows] = useState({});

  const [location, setLocation] = useState(''); 

  const [movie, setMovie] = useState();
   
  return (
    <div className="app">
      <Router history ={history}>
        <Header userData={userData} setUserData={setUserData} setLocation={setLocation}/>
        <div className='container'>
        <Routes>
          <Route path='/' exact element={<Home location={location}/>} />
          <Route path='/login'element={<Login setUserData={setUserData}/>} />
          <Route path='/signup'  element={<Signup/>} />
          <Route path='/movie/:movieId' element={<MovieDetail  location={location} setMovie={setMovie}/>} />
          <Route path='/movieScreen' element={<MovieScreen  />} />
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/showlist' element={<ShowList movie={movie} />} />
          <Route path='/book' element={<SeatBooking movie = {movie}/>} />
          <Route path='/status' element={<Status/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;