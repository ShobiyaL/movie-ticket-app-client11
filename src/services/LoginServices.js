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
     // if(response.data.obj) {
            //     console.log(response.data.obj);
            //     value = response.data.obj;
            // } else {
            //     console.log(response.data.obj);
            //     value = {'message': 'Auth failed'};
            // }
    console.log(response);
    let results;
    if (!response.data.obj) {
        results = {
            isError: true,
            data: response.message
        };
    } else {
        console.log(response);
        results = {
            isError: false,
            data: response.data.obj
        };
        console.log(results.data);
        if (results.data.existingUser) {
            console.log('passed');
            setUserData({ 'loggedIn': true, 'userName': results.data.userName, 'timeOut': '10Min' });
            history.push('/');
        }
        // setLogedIn(true);
    }
    console.log(results);
    return results;

}