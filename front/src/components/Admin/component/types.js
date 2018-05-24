import React, { Component } from 'react';
import {Form, Select} from 'antd'
const FormItem = Form.Item
const { Option, OptGroup } = Select

class Types extends Component {
  render() { 
    const {getFieldDecorator, formItemLayout, productData} = this.props
    return ( 
      <FormItem label='项目系别' {...formItemLayout}>
        {
          getFieldDecorator('type', {
            initialValue: productData.type || []
          })(
            <Select
              mode="multiple"
              style={{width: "100%"}}
              placeholder="Please select"
            >
            <OptGroup label="背景">
              <Option value="bj_1">民营系</Option>
              <Option value="bj_2">国资系</Option>
              <Option value="bj_3">上市系</Option>
              <Option value="bj_4">银行系</Option>
              <Option value="bj_5">国资参股</Option>
            </OptGroup>
            <OptGroup label="银行存管">
              <Option value="yc_1">银行存管</Option>
              <Option value="yc_2">暂无存管</Option>
              <Option value="yc_3">存管协议已签订</Option>
              <Option value="yc_4">资金托管</Option>
            </OptGroup>
            <OptGroup label="运营时间">
              <Option value="yy_1">一年内</Option>
              <Option value="yy_2">一年以上</Option>
              <Option value="yy_3">两年以上</Option>
              <Option value="yy_4">三年以上</Option>
              <Option value="yy_5">四年以上</Option>
              <Option value="yy_6">五年以上</Option>
              <Option value="yy_7">六年以上</Option>
              <Option value="yy_8">七年以上</Option>
              <Option value="yy_9">八年以上</Option>
              <Option value="yy_10">十年以上</Option>
            </OptGroup>
            <OptGroup label="有无融资">
              <Option value="rz_1">A轮融资</Option>
              <Option value="rz_2">B轮融资</Option>
              <Option value="rz_3">C轮融资</Option>
              <Option value="rz_4">D轮融资</Option>
              <Option value="rz_5">IPO</Option>
            </OptGroup>
          </Select>
          )
        }
      </FormItem>
    )
  }
}
 
export default Types;