import React, { Component } from 'react';
import {Row, Col} from 'antd'
import PropTypes from 'prop-types';
import './style/listItem.less'

class ListItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  go = (id) => {
    this.context.router.history.push(`/detail/${id}`)
  }
  render() { 
    const {item, index} = this.props
    return ( 
      <div className='mainlist'>
        <div className={`left bg${index}`}>
          <span className="see-more no-select">参看更多+</span>
        </div>
        <div className="right">
          {
            item.map((product, index) => {
              return (
                <div key={index}>
                  <div className="product-box">
                    <div className='box-title'>
                      <div className='box-logo'>
                        <img src="" alt={product.logo} />
                      </div>
                      <div className='box-title-text'>{product.des}</div>
                    </div>
                    <Row className='box-content'>
                      <Col span={8}>
                        <p className='box-contnt-title'>历史年化率</p>
                        <p className='box-content-content'>{product.history_year_rate}</p>
                      </Col>
                      <Col span={8}>
                        <p className='box-contnt-title'>投资期限</p>
                        <p className='box-content-content'>{product.investment_time}</p>
                      </Col>
                      <Col span={8}>
                        {/* <span className='product-type'>{product.type}</span>
                        <span className='product-grade'>{product.grade}</span> */}
                      </Col>
                    </Row>
                    <Row className='box-content'>
                      <Col span={8}>
                        <p className='box-contnt-title'>起投金额</p>
                        <p className='box-content-content'>{product.start_money}</p>
                      </Col>
                      <Col span={8}>
                        <p className='box-contnt-title'>返还金额</p>
                        <p className='box-content-content'>{product.return_money}</p>
                      </Col>
                      <Col span={8}>
                        <span className='product-btn' onClick={() => {this.go(product.productId)}}>立即投标</span>
                      </Col>
                    </Row>
                  </div> 
                </div>
              )
            })
          }
        </div>
      </div> 
  )
  }
}
 
export default ListItem;