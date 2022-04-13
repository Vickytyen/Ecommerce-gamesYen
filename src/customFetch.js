let is_ok = true;

const {data} = require('./data.js');

export const customFetch = () => {
    return new Promise ((resolve, reject) => {
        if (is_ok) {
            resolve(data);
            
        } else {
            reject("ko");
        }
    })
}

