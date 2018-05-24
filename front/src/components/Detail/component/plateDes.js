import React, { Component } from 'react';

class PlateDes extends Component {
  render() { 
    const {item} = this.props
    return ( 
      <div>
        {item.plateDes}
      </div> 
    )
  }
}
 
export default PlateDes;