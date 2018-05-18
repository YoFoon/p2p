import React, { Component } from 'react';
import {
  Form
} from 'antd'

import {
  Input,
  Types,
  InputTable,
  CompanyDes,
  PlateDes
} from './component'

import InputConfig from './config/input.config'

class Index extends Component {
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
              <Input {...diliver} config = {config} />
            )
          })
        }
        <Types {...diliver} />
        <InputTable {...diliver} />
        <CompanyDes {...diliver} />
        <PlateDes {...diliver} />
      </div> 
    )
  }
}

const IndexWrap = Form.create()(Index)

export default IndexWrap;