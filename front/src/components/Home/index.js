import React, { Component } from 'react';
import Banner from './banner'
import Extension from './extension'
import List from './list'
import {Provider, observer} from 'mobx-react'
import Store from './store/homeStore'
const store = new Store()

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Provider
        store={store}
      >
        <div className='home-page-wrap'>
          <Banner />
          <Extension />
          <List />
        </div>
      </Provider> 
    )
  }
}
 
export default HomeIndex;