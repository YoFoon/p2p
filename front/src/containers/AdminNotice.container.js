import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import AdminNotice from '../components/AdminNotice'

class AdminNoticeWrap extends Component{
  render() {
    return (
      <AdminNotice />
    );
  }
}

export default withRouter(AdminNoticeWrap);