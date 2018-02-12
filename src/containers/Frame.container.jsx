import React from 'react';
// import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

// @inject('frameStore')
// @observer
class Frame extends React.Component{
  render() {
    return (
      <div id='Frame' className='Frame'>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Frame);