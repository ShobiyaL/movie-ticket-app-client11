import { getData, postData } from "../utilities/api";
// import {useNavigate} from "react-router-dom"
import history from '../history';

export async function trySignup(firstName, lastName, email, password) {
    const url = 'user/signup';
    const body = {
        "username": firstName,
        "lastname": lastName,
        "emailId": email,
        "password": password 
    }
    const response = await postData(url, body);
    console.log(response);
    let results;
    if (response.message) {
        results = {
            isError: true,
            data: response.message
        };
    } else {
        console.log(response);
        results = {
            isError: false,
            data: response
        };
        console.log(results.data);
        if (results.data.existingUser) {
            console.log('passed');
            history.push('/home');
        }
        // setLogedIn(true);
    }
    return results;

}