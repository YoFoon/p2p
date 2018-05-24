import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import AdminNoticeDetail from '../components/AdminNoticeDetail'

class AdminNoticeDetailWrap extends Component{
  render() {
    return (
      <AdminNoticeDetail />
    );
  }
}

export default withRouter(AdminNoticeDetailWrap);