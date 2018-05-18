import React, { Component } from 'react';
import {Form, Input} from 'antd'
const FormItem = Form.Item
const { TextArea } = Input;

class Des extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData} = this.props
    return (
      <FormItem {...formItemLayout} label='公司简介'>
        {
          getFieldDecorator('companyDes', {
            initialValue: productData.companyDes || ''
          })(
            <TextArea rows={4} />
          )
        }
      </FormItem>
    )
  }
}
 
export default Des;