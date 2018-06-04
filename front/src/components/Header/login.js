import React, { Component } from 'react';
import {Form, Input, Button, Icon} from 'antd'
const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@Form.create()
class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </div>
    )
  }
}

export default Reg