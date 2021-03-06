import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'antd'

class NoticeList extends Component {
  onChange = (page) => {
    console.log(page)
  }
  render() {
    const {list} = this.props
    console.log(list)
    const columns = [{
      title: '公告标题',
      key: 'title',
      // dataIndex: 'title',
      render: (text,record) => {
        return (<Link to={`/adminNotice/${record.id}`}>{record.title}</Link>)
      }
    }, {
      title: '公告时间',
      dataIndex: 'time',
      key: 'time',
    }];
    
    return(
      <div>
        <Table
        columns={columns} 
        dataSource={list}
        onChange={this.onChange}
        rowKey={record => record.id}
      />
      </div>
    )
  }
}

export default NoticeList