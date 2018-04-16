import React, { Component } from 'react';
import * as mobx from 'mobx'
import {inject, observer} from 'mobx-react'
import ListItem from './listItem'
import './style/list.less'

@inject('store')
@observer
class List extends Component {
  componentDidMount() {
    this.props.store.getProductList()
  }

  render() {
    const List = mobx.toJS(this.props.store.List)
    return ( 
      <div className="list-container">
        {
          List.map((item, index) => {
            return (
              <ListItem item={item} key={index} />
            )
          })
        }
      </div>
     )
  }
}
 
export default List;