let is_ok = true;
let delay = 2000

const {data} = require('./data.js');

export function customFetch(delay, data) { 
    return new Promise ((resolve, reject) => {
        if (is_ok) {
            resolve(data);
            
        } else {
            reject("ko");
        }
    })
}

