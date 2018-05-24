import React, {Component} from 'react'
import moment from 'moment'

import * as mobx from 'mobx'
import {observer} from 'mobx-react'
import Store from './store/noticeDetail.store'
const store = new Store()

@observer
class Index extends Component {
  static defaultProps = {
    store
  }

  componentDidMount() {
    this.props.store.getNoticeById(this.props.id)
  }

  render() {
    const noticeDetail = mobx.toJS(this.props.store.noticeDetail)
    return(
      <div>
        <h2>{noticeDetail.title || ''}</h2>
        <p>{moment(noticeDetail.time).format('YYYY-MM-DD HH:mm')}</p>
        <div
          dangerouslySetInnerHTML={{__html:noticeDetail.content ? noticeDetail.content : ""}}
        />
      </div>
    )
  }
}

export default Index