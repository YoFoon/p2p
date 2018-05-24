import React, {Component} from 'react'
import {Form, DatePicker} from 'antd'
const FormItem = Form.Item  
import moment from 'moment'

class Title extends Component {
  render() {
    const {getFieldDecorator, noticeDetail, formItemLayout} = this.props;
    return(
      <FormItem {...formItemLayout} label='时间'>
        {
          getFieldDecorator('time', {
            initialValue: noticeDetail.title || moment()
          })(
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
            />
          )
        }
      </FormItem>
    )
  }
}

export default Title