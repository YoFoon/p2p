import React, { Component } from 'react';
import * as mobx from 'mobx'
import {inject, observer} from 'mobx-react'
import ListItem from './listItem'
import './style/list.less'

@inject('store')
@observer
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.store.getRecommendProduct()
  }

  render() {
    const recommendList = mobx.toJS(this.props.store.RecommendList)
    return ( 
      <div className="list-wrap">
        {
          recommendList.map((item, index) => {
            return (
              <ListItem item={item} index={index} key={index} />
            )
          })
        }
      </div> 
    )
  }
}
 
export default List;