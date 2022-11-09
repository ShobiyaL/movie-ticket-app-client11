import axios from "axios";


const BASE_PATH = 'https://movie-ticket-app-server.herokuapp.com/api/';
const headers = {
    'check': 'check'
};
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // headers: { 'dummy': 'dummy' },
    body: JSON.stringify({ "emailId": 'person4@gmail.com', "password": '456pqrs123' })
};


export const getData = async (url) => {
    url = BASE_PATH + 'api/user/signin';
    // const response = await fetch(url, requestOptions);
    // console.log(response);

    // if (!response.ok) {
    //     const message = `An error has occurred: ${response.status}`;
    //     throw new Error(message);
    // }

    // const data = await response.json();
    // return data;
    axios
        .post(url, { "emailId": 'person4@gmail.com', "password": '456pqrs123' })
        .then((response) => {
            console.log(response);
            return response.json();
        });


};

export const postData = async (url, body) => {
    url = BASE_PATH + 'user/signin';
    let value = {};
   
    await axios
        .post(url, body)
        .then((response) => {
            console.log(response);
            console.log(response.data.obj);
            if(response.data.obj) {
                console.log(response.data.obj);
                value = response.data.obj;
            } else {
                console.log(response.data.obj);
                value = {'message': 'Auth failed'};
            }
        });

        return value;
};



