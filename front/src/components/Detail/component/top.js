import React, { Component } from 'react';
import '../style/top.less'
class Top extends Component {
  render() {
    const {item} = this.props
    console.log(item)
    return ( 
      <div className='detail-top clearfix'>
        <div className="logo">
          logo
        </div>
        <div className="right-content">
          <div className='right-content-top'>
            <span>{item.name}</span>
            <span>{item.des}</span>
          </div>
          <div className="right-content-bottom clearfix">
            <div className="col-6">
              <p>平台预期年化</p>
              <p>{item.yuqi_nianhua}</p>
            </div>
            <div className="col-6">
              <p>投资期限</p>
              <p>{item.investment_time}</p>
            </div>
            <div className="col-6">
              <p>单笔限额</p>
              <p>{item.danbi_xiane}</p>
            </div>
            <div className="col-6">
              <p>最高返利</p>
              <p>{item.return_money}</p>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}
 
export default Top;