import React, { Component } from 'react';
import {Form, Select} from 'antd'
const FormItem = Form.Item
const { Option } = Select

class Types extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData} = this.props
    return ( 
      <FormItem label='推荐类型' {...formItemLayout}>
        {
          getFieldDecorator('recommend', {
            initialValue: productData.recommend || []
          })(
            <Select
              mode="multiple"
              style={{width: "100%"}}
              placeholder="Please select"
            >
              <Option value="1">稳健产品型</Option>
              <Option value="2">精选产品</Option>
              <Option value="3">高收益产品</Option>
          </Select>
          )
        }
      </FormItem>
    )
  }
}
 
export default Types;