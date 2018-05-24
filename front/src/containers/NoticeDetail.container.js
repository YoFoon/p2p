import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import NoticeDetail from '../components/NoticeDetail/index'

class NoticeDetailWrap extends Component{
  render() {
    const id = this.props.match.params.id || ''
    return (
      <NoticeDetail id={id} />
    );
  }
}

export default withRouter(NoticeDetailWrap);