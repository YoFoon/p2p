import React, { Component } from 'react';
import {InputTableItem} from './index'
import {Form} from 'antd'
const FormItem = Form.Item

class InputTable extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData} = this.props
    return (
      <FormItem {...formItemLayout} label='返利方案'>
        {
          getFieldDecorator('rebate', {
            initialValue: productData.rebate || [{}]
          })(
            <InputTableItem />
          )
        }
      </FormItem>
    )
  }
}
 
export default InputTable;