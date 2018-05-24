import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import AdminNoticeDetail from '../components/AdminNoticeDetail'

class AdminNoticeDetailWrap extends Component{
  render() {
    const id = this.props.match.params.id || ''
    return (
      <AdminNoticeDetail id={id} />
    );
  }
}

export default withRouter(AdminNoticeDetailWrap);