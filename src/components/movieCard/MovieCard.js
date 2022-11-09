import React from 'react'
import "./movieCard.scss"
import {Link} from "react-router-dom"
const MovieCard = (props) => {
  const {data} = props
  return (
    <div className="card-item">
    <Link to={`/movie/${data._id}`}>
     <div className="card-inner">
      <div className="card-top">
        <img src={data.posterImage} alt={data.title}/>
      </div>
      <div className='card-bottom'>
        <div className='card-info'>
          <h4>{data.title}</h4>
         <p style={{color:"gray"}}>{data.director}</p>
        </div>
      </div>
     </div>
     </Link>
    </div>
  )
}

export default MovieCard