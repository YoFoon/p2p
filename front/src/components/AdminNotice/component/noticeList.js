import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'antd'

class NoticeList extends Component {
  onChange = (page) => {
    console.log(page)
  }
  render() {
    const {item} = this.props
    const columns = [{
      title: 'title',
      key: 'title',
      render: (text,record) => <Link to={`/admin/notice/${record.id}`}>{text}</Link>
    }, {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    }];
    
    return(
      <div>
        1
       {/*  <Table
        columns={columns} 
        dataSource={item}
        onChange={this.onChange}
        rowKey={record => record.id}
      /> */} 
      </div>
    )
  }
}

export default NoticeList