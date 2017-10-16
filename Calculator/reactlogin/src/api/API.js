const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload, callback, error) =>
    fetch(`${api}/users/doLogin`, {
        credentials: 'include',
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: payload.number1,
            num2: payload.number2
        })
    }).then((response) => {
        return response.json();
    })
        .then(callback)
        .catch(error);

export const doSub = (payload, callback, error) =>
    fetch(`${api}/users/doSub`, {
        credentials: 'include',
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: payload.number1,
            num2: payload.number2
        })
    }).then((response) => {
        return response.json();
    })
        .then(callback)
        .catch(error);
export const doMul = (payload, callback, error) =>
    fetch(`${api}/users/doMul`, {
        credentials: 'include',
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: payload.number1,
            num2: payload.number2
        })
    }).then((response) => {
        return response.json();
    })
        .then(callback)
        .catch(error);

export const doDiv = (payload, callback, error) =>
    fetch(`${api}/users/doDiv`, {
        credentials: 'include',
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: payload.number1,
            num2: payload.number2
        })
    }).then((response) => {
        return response.json();
    })
        .then(callback)
        .catch(error);