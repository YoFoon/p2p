import React, { Component } from 'react';
import {Form, Input} from 'antd'
const FormItem = Form.Item
const { TextArea } = Input;

class Des extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData} = this.props
    return (
      <FormItem {...formItemLayout} label='平台简介'>
        {
          getFieldDecorator('plateDes', {
            initialValue: productData.plateDes || ''
          })(
            <TextArea rows={4} />
          )
        }
      </FormItem>
    )
  }
}
 
export default Des;