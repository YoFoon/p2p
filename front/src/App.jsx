import  React, {Component} from "react";
import { Provider } from 'mobx-react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// 容器
// 容器
import {
    Frame,
    Home,
    Detail,
    List
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
                            <Redirect exact from="/" to="/index" />
                            <Route path="/index" component={Home} />
                            <Route path="/detail" component={Detail} />
                            <Route path="/list" component={List} />
                        </Switch>
                    </Frame>
                </HashRouter> 
            </Provider>
        )
    }
}