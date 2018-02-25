// declare let module: any;
import React from 'react';
import ReactDOM from 'react-dom';
// import { useStrict, observable, reaction } from 'mobx';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import 'normalize.css';

// useStrict(true);

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

// ReactDOM.render(
//         <App />,
//         document.getElementById('react')
//     );