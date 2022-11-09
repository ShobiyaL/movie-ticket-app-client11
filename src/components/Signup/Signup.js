import React from 'react';
import { connect } from 'react-redux';
import '../Login/Login.css';
import './Signup.css';
import { trySignup } from '../../services/SignupService';

import { useState } from 'react';
const handleSubmit = async (event) => { 
  event.preventDefault();
  const firstName = event.target.form.first_name.value;
  const lastName = event.target.form.last_name.value;
  const email = event.target.form.email.value;
  const password = event.target.form.password.value;
  console.log(firstName, lastName, email, password);
  trySignup(firstName, lastName, email,password);
}


function Signup(props) { 
  const [signedUp, setSignedup] = useState({status:false, message: ''});
      
        return (
            <div className="signupbody">
            <div id="signupform" className='tab-content'>
                <div className="signupform tab-pane fade active in" id="signup">
                      <h2 className="text-uppercase text-center"> Sign Up for Free</h2>
                      <form id="signup" onClick={handleSubmit}>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                              <label>First Name<span className="req">*</span> </label>
                              <input type="text" className="form-control" id="first_name" required data-validation-required-message="Please enter your name." autocomplete="off"/>
                              <p className="help-block text-danger"></p>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                              <label> Last Name<span className="req">*</span> </label>
                              <input type="text" className="form-control" id="last_name" required data-validation-required-message="Please enter your name." autocomplete="off"/>
                              <p className="help-block text-danger"></p>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label> Your Email<span className="req">*</span> </label>
                          <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." autocomplete="off"/>
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <label> Your Phone<span className="req">*</span> </label>
                          <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." autocomplete="off"/>
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <label> Password<span className="req">*</span> </label>
                          <input type="password" className="form-control" id="password" required data-validation-required-message="Please enter your password" autocomplete="off"/>
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="mrgn-30-top">
                          <button type="submit" className="btn btn-larger btn-block">
                          Sign up
                          </button>
                          <h4 className = 'hidden-msg'>{signedUp.message}</h4>
                        </div>
                      </form>
                    </div>
                
            </div>
            </div>
        );
}

export default Signup;