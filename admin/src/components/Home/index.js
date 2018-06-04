import React, { Component } from 'react';
import ClassB from './classB'

class Index extends Component {
  componentDidMount() {
    console.log(ClassB.$num)
    console.log(ClassB.print())
  }
  render() { 
    return ( 
      <div>1</div>
    )
  }
}
 
export default Index;