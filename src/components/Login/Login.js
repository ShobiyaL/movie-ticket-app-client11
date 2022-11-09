import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { fetchData, triggerLogIn } from '../../actions/actions';
import { tryLogin } from '../../services/LoginServices';

import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'

function Login(props) {
  let location = useLocation();
  // const [userData, setUserData] = useState({ 'name': '', 'species': '' });
  const [logedIn, setLogedIn] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;
    const message = tryLogin(email, pass, props.setUserData); 
      
    navigate('/');
  };

  return (
    <>
     
        <div id="loginform">
          <div className="container">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2">
              <div id="userform">
                <div className="tab-content">
                  <div className="tab-pane fade in" id="login">
                    <h2 className="text-uppercase text-center"> Log in</h2>
                    <form id="login" onSubmit={handleSubmit} >
                      <div className="form-group">
                        <label> Your Email<span className="req">*</span> </label>
                        <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." autocomplete="off" />
                      </div>
                      <div className="form-group">
                        <label> Password<span className="req">*</span> </label>
                        <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password" autocomplete="off" />
                      </div>
                      <div className="mrgn-30-top">
                        <button type="submit" className="btn btn-larger btn-block">
                          Log in
                        </button>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>

  );
}

export default Login;