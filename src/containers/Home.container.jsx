import React, {Component} from 'react';
import {Button, Input} from 'antd';
// import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header/index';

// @inject('frameStore', 'appListStore')
// @observer
class Home extends Component{
  render() {
    return (
      <div id="Home">
        <Header />
      </div>
    );
  }
}

export default withRouter(Home);