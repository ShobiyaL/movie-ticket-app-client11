import React, { useEffect } from "react";
import "./movieDetail.scss";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(movieId));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, movieId]);

  const handleClick=(data)=>{
    console.log(data);
   }

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.movie.title}</div>
            
            
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.movie.director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.movie.cast}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.movie.genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.movie.language}</span>
              </div>
              <Link to='/movieScreen'> <button onClick={()=>handleClick(data.movie.title)}
               style={{color:"black",fontSize:"17px",padding:"5px",marginTop:"20px",marginLeft:"20px"}}>Book Tickets</button>
            </Link>
            </div>
          </div>
          <div className="section-right">
            <img src={data.movie.posterImage} alt={data.movie.title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;