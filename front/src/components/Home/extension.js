import React, { Component } from 'react';
import './style/extension.less'
class Extension extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='extension-wrap clearfix'>
        <div>推广1</div>
        <div>推广2</div>
        <div>推广3</div>
      </div> 
    )
  }
}
 
export default Extension;