import React, {Component} from 'react'
import {Form, Input} from 'antd'
const FormItem = Form.Item  

class Title extends Component {
  render() {
    const {getFieldDecorator, noticeDetail, formItemLayout} = this.props;
    return(
      <FormItem {...formItemLayout} label='标题'>
        {
          getFieldDecorator('title', {
            initialValue: noticeDetail.title || ''
          })(
            <Input type="text" />
          )
        }
      </FormItem>
    )
  }
}

export default Title