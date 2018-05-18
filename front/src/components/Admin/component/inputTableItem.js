import React, { Component } from 'react';
import {Input, Button} from 'antd'
class InputTableItem extends Component {
  onChange = (v, index, type) => {
    const {value, onChange} = this.props
    value[index][type] = v
    onChange && onChange(v)
  }
  del = index => {
    const {value, onChange} = this.props
    value.splice(index, 1)
    onChange && onChange(value)
  }
  add = () => {
    const {value, onChange} = this.props
    value.push({})
    console.log(value)
    onChange && onChange(value)
  }
  render() { 
    const {value} = this.props
    console.log(value)
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>返现类型</th>
            <th>投资标期</th>
            <th>投资金额</th>
            <th>返现</th>
            <th>综合年化</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            value.map( (item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><Input onChange={(e) => {this.onChange(e.taeget.value, index, 'type')}} type='text' value={item.type || ''} /></td>
                  <td><Input onChange={(e) => {this.onChange(e.taeget.value, index, 'time')}} type='text' value={item.time || ''} /></td>
                  <td><Input onChange={(e) => {this.onChange(e.taeget.value, index, 'money')}} type='text' value={item.money || ''} /></td>
                  <td><Input onChange={(e) => {this.onChange(e.taeget.value, index, 'returnMoney')}} type='text' value={item.returnMoney || ''} /></td>
                  <td><Input onChange={(e) => {this.onChange(e.taeget.value, index, 'rate')}} type='text' value={item.rate || ''} /></td>
                  <td><span onClick={() => {this.del(index)}}>删除</span></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        <Button type='primary' onClick={this.add}>添加</Button>
      </div>
    )
  }
}
 
export default InputTableItem;