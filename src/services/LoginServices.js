import { getData, postData } from "../utilities/api";
// import {useNavigate} from "react-router-dom"
import history from '../history';

export async function tryLogin(email, pass, setUserData) {
    console.log('tryLogIn method');
    // const navigate = useNavigate();
    // const url = `https://legacy--api.herokuapp.com/api/v1/characters`;
    const url = 'user/signin';
    const body = { "emailId": email, "password": pass };
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
            setUserData({ 'loggedIn': true, 'userName': results.data.userName, 'timeOut': '10Min' });
            history.push('/home');
        }
        // setLogedIn(true);
    }
    return results;

}