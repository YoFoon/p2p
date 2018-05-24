import React, {Component} from 'react'
import {Form, Button} from 'antd'
import PropTypes from 'prop-types'

import {
  NoticeDetail,
  Title,
  Time
} from './component/index'

import * as mobx from 'mobx'
import {observer} from 'mobx-react'
import Store from './store/adminNoticeDetail.store'
const store = new Store()

@observer
class Index extends Component {
  static defaultProps = {
    store
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    if (this.props.id){
      this.props.store.getNoticeById(this.props.id)
    }
  }

  onClick = async () => {
    const {form, id, store} = this.props
    const {getFieldsValue} = form
    const data = getFieldsValue()
    if (id) {
      data.id = id
      await store.updateNotice(data)
    } else {
      await store.addNotice(data)
    }
    this.context.router.history.push('/adminNotice')
  }

  render() {
    const noticeDetail = mobx.toJS(this.props.store.noticeDetail)
    const formItemLayout = {labelCol: {span: 3}, wrapperCol: {span: 18}}
    const {getFieldDecorator,setFieldsValue, getFieldsValue} = this.props.form
    const diliver = {
      getFieldDecorator, 
      setFieldsValue, 
      getFieldsValue,
      formItemLayout,
      noticeDetail
    }
    console.log(noticeDetail)
    return(
      <div>
        <Title {...diliver} />
        <Time {...diliver} />
        <NoticeDetail {...diliver} />
        <Button type='primary' onClick={this.onClick}>确定</Button>
      </div>
    )
  }
}

const IndexWrap = Form.create()(Index)
export default IndexWrap