import React, { Component } from 'react';

class CompanyDes extends Component {
  render() { 
    const {item} = this.props
    return ( 
      <div>
        {item.companyDes}
      </div> 
    )
  }
}
 
export default CompanyDes;