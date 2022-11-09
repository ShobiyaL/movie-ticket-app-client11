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


function App() {
  const [userData, setUserData] = useState({'loggedIn': false, 'userName': 'abc', 'timeOut': '' });
  console.log('ll',userData);
  
  
  return (
    <div className="app">
      <Router history ={history}>
        <Header userData={userData} setUserData={setUserData}/>
        <div className='container'>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login'element={<Login setUserData={setUserData}/>} />
          <Route path='/signup'  element={<Signup/>} />
          <Route path='/movie/:movieId' element={<MovieDetail />} />
          <Route path='/movieScreen' element={<MovieScreen  />} />
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/showlist' element={<ShowList/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
