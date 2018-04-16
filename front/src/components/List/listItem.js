import React, { Component } from 'react';

class ListItem extends Component {
  render() { 
    const {item} = this.props;
    return ( 
      <div className="clearfix list-item-container">
        <div className="fir">
          1
        </div>
        <div className="item-title">
          <div className="name">{item.name}</div>
          <div className="des">{item.des}</div>
        </div>
        <div className="start-money">
          <div className="name">起投金额</div>
          <div className="des">{item.start_money}</div>
        </div>
        <div className="rate">
          <div className="name">平台年收益范围</div>
          <div className="des">{item.history_year_rate}</div>
        </div>
        <div className="time">
          <div className="name">投资期限</div>
          <div className="des">{item.investment_time}</div>
        </div>
        <div className="money">
          <div className="name">返利金额</div>
          <div className="des">{item.return_money}</div>
        </div>
        <div className="operate">
          <div>立即投标</div>
        </div>
      </div>
    )
  }
}
 
export default ListItem;