import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import API from './assets/api'
import {message} from 'antd'

import { AppContainer } from 'react-hot-loader';

import App from './App';

// import 'normalize.css';
import './assets/common.less'

axios.defaults.params = { t: +new Date() }
axios.interceptors.response.use(res => {
    const code = res.data.errCode
    if (code === 200) {
        return res.data.data ? res.data.data : '200'
    } else {
        message.error('请求失败')
    }
    }, error => {
    message.error('请求失败')
})
window.axios = axios
window.API = API

// if (process.env.NODE_ENV === 'development') {
// 
// }

window.log = window.console.log;

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            {Component}
        </AppContainer>,
        document.getElementById('react') 
    );
};

render(<App />);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp />);
    });
}