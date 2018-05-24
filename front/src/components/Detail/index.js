import React, { Component } from 'react';
import './style/index.less'
import {
  Top,
  Btns,
  Plan,
  Rules,
  Tabs
} from './component/index'

import * as mobx from 'mobx'
import {observer} from 'mobx-react'
import Store from './store/detail.store'
const store = new Store()

@observer
class Index extends Component {
  static defaultProps = {
    store
  }

  componentDidMount() {
    this.props.store.getProductById(this.props.id)
  }  

  render() { 
    const item = mobx.toJS(this.props.store.detailData)
    console.log(item)
    return ( 
      <div className='detail-index'>
        <Top item={item}  />
        <Btns item={item} />
        <Plan item={item} />
        <Rules />
        <Tabs item={item} />
      </div> 
    )
  }
}
 
export default Index;