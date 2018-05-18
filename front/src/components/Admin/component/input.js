import React, { Component } from 'react';
import {Form, Input} from 'antd'
const FormItem = Form.Item

class MyInput extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData, config} = this.props
    return (
      <FormItem {...formItemLayout} label={config.name}>
        {
          getFieldDecorator(config.code, {
            initialValue: productData[config.code] || ''
          })(
            <Input type='text' />
          )
        }
      </FormItem>
    )
  }
}
 
export default MyInput;