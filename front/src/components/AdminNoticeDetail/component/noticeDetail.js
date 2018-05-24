import React, {Component} from 'react'
import {Form, Button} from 'antd'
const FormItem = Form.Item  

import Editor from '../../../common/editor/index'

class NoticeDetail extends Component {
  render() {
    const opts = {
      toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough',
        'fontScale', 'color', 'ol', 'ul',
        'blockquote', 'table', 'link', 'hr', 'indent', 'outdent', 'alignment'],
      toolbarFloat: false
    };
    const {getFieldDecorator, noticeDetail, formItemLayout} = this.props;
    return(
      <FormItem {...formItemLayout} label='正文'>
        {
          getFieldDecorator('content', {
            initialValue: noticeDetail.content || ''
          })(
            <Editor
              opts={opts}
            >{noticeDetail.content ? noticeDetail.content : ''}</Editor>
          )
        }
      </FormItem>
    )
  }
}

export default NoticeDetail