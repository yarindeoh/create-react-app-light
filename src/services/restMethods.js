import 'isomorphic-fetch';

// Fetches an API response
export function post(url, data, headers = {}) {
    const options = {
        headers: {
            ...headers
        },
        mode: 'no-cors',
        method: 'POST'
    };
    return fetch(url, options).then(response => console.log(response));
}

export function get(url) {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
    };
    return fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        });
}
