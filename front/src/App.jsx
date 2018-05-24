import  React, {Component} from "react";
import { Provider } from 'mobx-react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// 容器
// 容器
import {
    Frame,
    Home,
    Detail,
    List,
    Tool,
    Notice,
    NoticeDetail,
    Admin,
    AdminNotice,
    AdminNoticeDetail
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
                            <Route path="/detail/:id" component={Detail} />
                            <Route path="/list" component={List} />
                            <Route path="/tool" component={Tool} />
                            <Route path="/notice/:id" component={NoticeDetail} />
                            <Route path="/notice" component={Notice} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/adminNotice/:id" component={AdminNoticeDetail} />
                            <Route path="/adminNotice" component={AdminNotice} />
                            <Route path="/adminNoticeAdd" component={AdminNoticeDetail} />
                        </Switch>
                    </Frame>
                </HashRouter> 
            </Provider>
        )
    }
}