import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import './Header.css'
import { Router, Route, NavLink } from 'react-router-dom';
import { getAllCities } from '../../services/CommonServices';
import { useState } from 'react';

function filterLocation(event) {
    let selectElement = document.querySelector('#c1');
    let output = selectElement.value;
    console.log(output);
}

export function Header(props) {
    const [cities, setCities] = useState(['allCities']);
    if (cities.length == 1) {
        getAllCities(setCities)
    }

    let setter = props.setUserData;
    console.log(setter);
    function signOut() {
        console.log('SIGNEDOUTT');
        setter({ 'loggedIn': false, 'userName': '', 'timeOut': '' });
    }

    return (
        <div className="head">
            <body>
                <ul className="header-ul">
                    <div className="headers-li-left">
                        <li className="header-li"><NavLink exact className="nav-link" activeClassName="active" to="/">Movie App</NavLink></li>
                        {console.log('twoooo')}
                    </div>
                    <div className="headers-li-right">
                        <form name="PostName" onChange={filterLocation}>
                            <label for="language">Location</label>
                            <select name="language" id="c1" onchange="PostName.submit()">
                                {cities.map((answer, i) => {
                                    if (answer != '')
                                        return (<option value={answer}>{answer}</option>)
                                })}

                            </select>
                        </form>
                        {!props.userData.loggedIn ?
                            <>
                                <li className="header-li"><NavLink exact className="nav-link" activeClassName="active"
                                    to={{ pathname: "/login", aboutProps: { 'setUserData': props.setUserData } }}>Login</NavLink></li>
                                <li className="header-li"><NavLink exact className="nav-link" activeClassName="active" to="/signup">Signup</NavLink></li>
                            </>
                            :
                            <>
                                <div className="welcome-user">Hi {props.userData.userName}!</div>
                                <li className="header-li"><NavLink exact className="nav-link" activeClassName="active" onClick={() => signOut()}
                                    to={{ pathname: "/login", aboutProps: { 'setUserData': props.setUserData } }}>Signout</NavLink></li>

                            </>
                        }
                    </div>
                </ul>
            </body>

        </div>
    );

}

export default Header;
