import React, { Component } from 'react';
import '../style/wangdai.less'
import {Form, Input, Radio, Button} from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group
class Wangdai extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      total1: 0,
      total2: 0
    }
  }
  cal = () => {
    const {getFieldsValue} = this.props.form
    const data = getFieldsValue()
    console.log(data)
    data.money = +data.money || 0
    data.rate = +data.rate / 100 || 0
    data.addRate = +data.addRate / 100 || 0
    data.biaoqi = +data.biaoqi || 0
    data.redbao = +data.redbao || 0
    data.returnMoney = +data.returnMoney || 0
    let total = 0
    let total2 = 0.00
    if (data.nianyue === 1) {
      total = data.money * (data.rate + data.addRate) / (12 / data.biaoqi) + data.redbao
      total2 = (12/data.biaoqi) *( (data.returnMoney + total) / (data.money - data.redbao) )
    } else {
      total = data.money * (data.rate + data.addRate) / (360 / data.biaoqi) + data.redbao
      total2 = (12/data.biaoqi) *( (data.returnMoney + total) / (data.money - data.redbao) )
    }
    let total1 = total + data.returnMoney
    this.setState({
      total: total.toFixed(2),
      total1: total1.toFixed(2),
      total2: total2.toFixed(2)
    })
  }
  reset = () => {
    this.props.form.resetFields()
  }
  render() { 
    const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 18}}
    const {getFieldDecorator} = this.props.form
    const {total, total1, total2} = this.state
    return ( 
      <div className='wangdai-wrap'>
        <div className='banner' />
        <div className="wangdai">
        <FormItem {...formItemLayout} label='金额'>
            {
              getFieldDecorator('money', {
                initialValue: 10000
              })(
                <Input style={{width: '300px'}} type='text' suffix={'元'} />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label='标的利率'>
            {
              getFieldDecorator('rate', {
                initialValue: 10
              })(
                <Input style={{width: '300px'}} type='text' suffix={'%'} />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label='平台加息'>
            {
              getFieldDecorator('addRate', {
                initialValue: undefined
              })(
                <Input style={{width: '300px'}} type='text' suffix={'%'} />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label='红包金额'>
            {
              getFieldDecorator('redbao', {
                initialValue: undefined
              })(
                <Input style={{width: '300px'}} type='text' suffix={'元'} />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label='标期'>
            {
              getFieldDecorator('biaoqi', {
                initialValue: undefined
              })(
                <Input style={{width: '300px'}} type='text' />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label='计算方式'>
            {
              getFieldDecorator('nianyue', {
                initialValue: '1'
              })(
                <RadioGroup>
                  <Radio value={'1'}>月</Radio>
                  <Radio value={'2'}>年</Radio>
                </RadioGroup>
              )
            }
            <span>一年按照360天计算	</span>
          </FormItem>
          <FormItem {...formItemLayout} label='返利金额'>
            {
              getFieldDecorator('returnMoney', {
                initialValue: undefined
              })(
                <Input style={{width: '300px'}} type='text' suffix={'元'} />
              )
            }
          </FormItem>
        </div>
        <div>
          <Button type='primary' onClick={this.cal}>计算</Button>
          <Button type='default' onClick={this.reset}>重置</Button>
        </div>
        <div>
          <div>
            <span>平台收益</span><span>{total}元</span>
          </div>
          <div>
            <span>综合收益</span><span>{total1}元</span>
          </div>
          <div>
            <span>综合年化</span><span>{total2}%</span>
          </div>
        </div>
      </div> 
    )
  }
}

const WangdaiWrap = Form.create()(Wangdai)
export default WangdaiWrap;