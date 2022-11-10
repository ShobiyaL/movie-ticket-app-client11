import './ShowList.css';
import { useNavigate } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
export function ShowList(props) {
    console.log(props);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    var selectedMonthName = months[mm - 1];

    let dates = [dd, Number( dd) + 1,Number( dd)  + 2];

function Divert() {
    console.log('hhh');
    const navigate = useNavigate();
    navigate('/bookl');

}


    function getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        document.write(today);

        return (
            <>
                <li>today</li>
                <li>today</li>
                <li>today</li>
            </>
        )
    }

    return (
        <div>
            <div className='movie-title'>
                BLACK PANTHER
            </div>
            <div className='time-sheet'>
                <div className='month'>{selectedMonthName}</div>
                <div className='date'>
                    {dates.map((answer, i) => {
                        if (answer != '')
                            return (<li className= 'time-display'>{answer}</li>)
                    })}
                </div>
            </div>
            <div className="show-list">
                <div className="theater-detail">
                    ks theater
                </div>
                <div className="show-detail">
                    <div className="show-time pills">
                    <NavLink exact to={{ pathname: "/book" }}> 
                    <div className='time-card' onClick={Divert}>
                            9.00am
                        </div>
              </NavLink>
                       
                    </div>
                    <div className="show-time pills">
                    <NavLink exact to={{ pathname: "/book" }}> 
                    <div className='time-card' onClick={Divert}>
                            1.00am
                        </div>
              </NavLink>
                    </div>
                    <div className="show-time pills">
                    <NavLink exact to={{ pathname: "/book" }}> 
                    <div className='time-card' onClick={Divert}>
                            4.00pm
                        </div>
              </NavLink>
                    </div>
                    <div className="show-time pills">
                    <NavLink exact to={{ pathname: "/book" }}> 
                    <div className='time-card' onClick={Divert}>
                            7.00am
                        </div>
              </NavLink>
                    </div>
                    <div className="show-time pills">
                    <NavLink exact to={{ pathname: "/book" }}> 
                    <div className='time-card' onClick={Divert}>
                            10.00am
                        </div>
              </NavLink>
                    </div>
                    
                
                </div>

            </div>
        </div>
    );
}