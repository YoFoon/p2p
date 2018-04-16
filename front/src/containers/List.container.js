import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import ListIndex from '../components/List/index'

class List extends Component{
  render() {
    return (
      <ListIndex />
    );
  }
}

export default withRouter(List);