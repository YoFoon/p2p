import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import AdminIndex from '../components/Admin'

class Admin extends Component{
  render() {
    return (
      <AdminIndex />
    );
  }
}

export default withRouter(Admin);