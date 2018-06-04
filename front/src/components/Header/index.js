import React, { Component } from 'react';

import Help from './help';
import Header from './header';

class Index extends Component {
  
  render() { 
    return ( 
      <div className='header'>
        <Help />
        <Header />
      </div> 
    )
  }
}
 
export default Index;