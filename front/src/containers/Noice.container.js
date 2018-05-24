import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {
  Notice
} from '../components/Notice/index'

class NoticeWrap extends Component{
  render() {
    const id = this.props.match.params.id || ''
    return (
      <Notice id={id} />
    );
  }
}

export default withRouter(NoticeWrap);