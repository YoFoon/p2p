import {
    message
} from 'antd';

function resolve(response) {
    return response;
}
function reject(error) {
    switch (error.status) {
        case 200: 
            break;
        case 401:
            break;
        default:
            message.error(`${error.status} ${error.statusText}`);
            break;
    }
    return error;
}
function Request(url = "", {config = {}} = {}) {
    return $.ajax({
        url,
        ...config
    }).then(resolve, reject);
}

// function Request(type = 'GET', api = '', data = {}, config = {}) {
//     const url = `/api/${api}`;
//     return $.ajax({
//         url,
//         type,
//         data,
//         timeout: 10000,
//         dataType: 'json',
//         crossDomain: false,
//         ...config
//     }).then(resolve, reject);
// }

export default Request;