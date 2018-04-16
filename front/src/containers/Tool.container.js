import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import ToolIndex from '../components/tool/index'

class Tool extends Component{
  render() {
    return (
      <ToolIndex />
    );
  }
}

export default withRouter(Tool);