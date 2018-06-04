import React, {Component} from 'react'

import {
  NoticeList
} from './component/index'

import './style/index.less'

import * as mobx from 'mobx'
import {observer} from 'mobx-react'
import Store from './store/notice.store'
const store = new Store()

@observer
class Index extends Component {
  static defaultProps = {
    store
  }

  componentDidMount() {
    this.props.store.getNoticeList()
  }

  render() {
    const noticeList = mobx.toJS(this.props.store.noticeList)
    return(
      <div>
        <NoticeList list={noticeList} />
      </div>
    )
  }
}

export default Index