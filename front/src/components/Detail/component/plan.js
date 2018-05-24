import React, { Component } from 'react';
import {Table} from 'antd'
class Plan extends Component {
  render() {
    const {item} = this.props
    const rebate = item.rebate ? JSON.parse(item.rebate) : []
    console.log(rebate)
    const columns = [
      {
        title: '序号',
        key: 'num',
        render: (text, record, index) => <span>{index+1}</span>
      }, {
        title: '体验要求',
        dataIndex: 'type',
        key: 'type',
      }, {
        title: '投资标期',
        dataIndex: 'time',
        key: 'time',
      }, {
        title: '起投金额',
        dataIndex: 'money',
        key: 'money',
      }, {
        title: '返利金额',
        dataIndex: 'returnMoney',
        key: 'returnMoney',
      }, {
        title: '综合年化',
        dataIndex: 'rate',
        key: 'rate',
      }
    ];
    return ( 
      <div>
        <h2>体验方案</h2>
        <Table 
          columns={columns} 
          dataSource={rebate}
          pagination={false}
        />
        <p>温馨提示：不满足该体验方案或通过本网站以外其它渠道链接进行体验的为无效数据;</p>
      </div> 
    )
  }
}
 
export default Plan;