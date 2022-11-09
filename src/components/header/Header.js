import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css'
import { Router, Route, NavLink } from 'react-router-dom';

class Header extends Component {
 render() {
        let setter = this.props.setUserData;
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
                            
                        </div>
                        <div className="headers-li-right">
                            <label for="language">Location</label>
                            <select name="language" id="language">
                                <option value="javascript">Trichy</option>
                                <option value="python">Chennai</option>
                                <option value="java" selected>Hyderabad</option>
                            </select>
                            {!this.props.userData.loggedIn ?
                                <>
                                    <li className="header-li"><NavLink exact className="nav-link" activeClassName="active"
                                        to={{ pathname: "/login", aboutProps: { 'setUserData': this.props.setUserData } }}>Login</NavLink></li>
                                    <li className="header-li"><NavLink exact className="nav-link" activeClassName="active" to="/signup">Signup</NavLink></li>
                                </>
                                :
                                <>
                                    <div className="welcome-user">Hi {this.props.userData.userName}!</div>
                                    <li className="header-li"><NavLink exact className="nav-link" activeClassName="active" onClick={() => signOut()}
                                        to={{ pathname: "/login", aboutProps: { 'setUserData': this.props.setUserData } }}>Signout</NavLink></li>

                                </>
                            }
                        </div>
                    </ul>
                </body>

            </div>
        );
    }
}

export default Header;
