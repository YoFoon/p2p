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
      title: 'title',
      key: 'title',
      // dataIndex: 'title',
      render: (text,record) => {
        return (<Link to={`/notice/${record.id}`}>{record.title}</Link>)
      }
    }, {
      title: 'time',
      // dataIndex: 'time',
      key: 'time',
      render: (text,record) => {
        return (<span>{moment(record.time).format('YYYY-MM-DD HH:mm')}</span>)
      }
    }];
    
    return(
      <div className='notice-list-page-wrap'>
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