import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/index';

class Frame extends React.Component{
  render() {
    return (
      <div id='Frame' className='Frame'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Frame);