import React, {Component} from 'react';
import {Button, Input} from 'antd';
import { withRouter } from 'react-router-dom';

import HomeIndex from '../components/Home/index'

class Home extends Component{
  render() {
    return (
      <HomeIndex />
    );
  }
}

export default withRouter(Home);