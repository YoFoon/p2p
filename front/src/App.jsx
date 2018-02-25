import  React, {Component} from "react";
import { Provider } from 'mobx-react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// 容器
// 容器
import {
    Frame,
    Home
} from './containers';
// 状态
// import stores from './stores';

export default class App extends Component{
    render() {
        return (
            <Provider>
                <HashRouter>
                    <Frame>
                        <Switch>
                            <Route path="/index" component={Home} />
                            <Redirect from='' to="/index" />
                        </Switch>
                    </Frame>
                </HashRouter> 
            </Provider>
        )
    }
}