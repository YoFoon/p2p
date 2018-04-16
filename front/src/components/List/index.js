import React, { Component } from 'react';

import List from './list'

import {Provider} from 'mobx-react'
import Store from './store/listStore'
const store = new Store()

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <Provider
        store={store}
      >
        <List />
      </Provider>
    )
  }
}
 
export default Index;