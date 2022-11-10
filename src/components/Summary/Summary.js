import './Summary.scss';

import { Link, NavLink } from "react-router-dom";
export function Summary(props) {
    console.log(props);
    return (
        <>
            <div className="summary">
                <div class="cardWrap">
                    <div class="card cardLeft">
                        <h1><span>Cinema</span></h1>
                        <div class="title">
                            <h2>{props.movie['title']}</h2>
                            <span>movie</span>
                        </div>
                        <div class="name">
                            <h2>{props.movie['director']}</h2>
                            <span>Director</span>
                        </div>
                       
                        <div class="time">
                            <h2>{props.movie['duration']}</h2>
                            <span>Duration</span>
                        </div>

                    </div>
                    <div class="card cardRight">
                        <div class="eye"></div>
                        <div class="number">
                            <h3>{props.seats.join(',')}</h3>
                            <span>seat</span>
                        </div>
                        <div class="barcode"></div>
                    </div>
                    <div>

                    </div>
                    <NavLink exact to={{ pathname: "/status" }}> 
                    <button class='lbtn' >Book</button>
              </NavLink>
                    

                </div>
            </div>
        </>
    );
}