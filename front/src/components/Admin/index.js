import React, { Component } from 'react';
import {
  Form,
  Button
} from 'antd'

import {
  Input,
  Types,
  InputTable,
  CompanyDes,
  PlateDes,
  Recommend
} from './component'

import InputConfig from './config/input.config'
import {observer} from 'mobx-react'
import Store from './store/admin.store'
const store = new Store()

@observer
class Index extends Component {
  static defaultProps = {
    store: store
  }

  add = () => {
    const data = this.props.form.getFieldsValue()
    data.rebate = JSON.stringify(data.rebate)
    data.type = JSON.stringify(data.type)
    this.props.store.addProduct(data)
  }
  render() { 
    const formItemLayout = {labelCol: {span: 3}, wrapperCol: {span: 18}}
    const {getFieldDecorator, setFieldsValue, getFieldValue} = this.props.form
    const diliver = {
      getFieldDecorator, 
      setFieldsValue, 
      getFieldValue,
      formItemLayout,
      productData: {}
    }
    return ( 
      <div>
        {
          InputConfig.map( config => {
            return (
              <Input key={config.code} {...diliver} config = {config} />
            )
          })
        }
        <Types {...diliver} />
        <InputTable {...diliver} />
        <CompanyDes {...diliver} />
        <PlateDes {...diliver} />
        <Recommend {...diliver} />
        <Button type='primary' onClick={this.add}>添加</Button>
        <Button type='default' onClick={this.cancel}>重置</Button>
      </div> 
    )
  }
}

const IndexWrap = Form.create()(Index)

export default IndexWrap;