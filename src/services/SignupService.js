import { getData, postData } from "../utilities/api";
// import {useNavigate} from "react-router-dom"
import history from '../history';


function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

export async function trySignup(firstName, lastName, email, password, setSignedup) {
    
    const url = 'user/signup';
    const body = {
        "username": firstName,
        "lastname": lastName,
        "emailId": email,
        "password": password 
    }
    const response = await postData(url, body);
    console.log(response.data.newUser);
    let results;
    if (!response.data.newUser) {
        results = {
            isError: true,
            data: response.data.message
        };
        setSignedup({status:'hidden-fail-msg', message: 'Sign up failed, Try again!'});
    } else {
        console.log(response);
        results = {
            isError: false,
            data: response
        };
        console.log(results.data);
        // if (results.data.existingUser) {
        //     console.log('passed');
        //     history.push('/home');
        // }
        setSignedup({status:'hidden-success-msg', message: 'signed up successfully'});
        await timeout(2000);
        history.push('/')
        // setLogedIn(true);
    }
    console.log(results);
    return results;
}