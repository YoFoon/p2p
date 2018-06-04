import React, { Component } from 'react';
import {Form, Input, Button, Icon} from 'antd'
import CryptoJS, {MD5} from 'crypto-js'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span:6
  },
  wrapperCol: {
    span: 15
  },
};

@Form.create()
class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('密码不一致');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  regFn = () => {
    this.props.form.validateFields((err, value) => {
      console.log(err)
      console.log(value)
      if (err) {
        return
      }
      else {

      }
    })
  }
  render() { 
    const { getFieldDecorator } = this.props.form;
    console.log(MD5('admin').toString(CryptoJS.enc.Hex))
    return (
      <div>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入合法的邮箱',
            }, {
              required: true, message: '请输入邮箱',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请输入确认密码',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='姓名'
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入姓名', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <div style={{marginLeft: '25%'}}>
          <Button onClick={this.regFn} type='primary'>注册</Button>
        </div>
      </div>
    );
  }
}

export default Reg