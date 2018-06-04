import React, { Component } from 'react';
import {NavLink as Link } from 'react-router-dom';
import './style/help.less'

import Operate from './operate'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      type: ''
    }
    window.operate = this.operate
  }
  operate = type => {
    this.setState({
      visible: true,
      type
    })
  }
  handleOk = async () => {
    if (this.state.type === 'reg') {
      console.log('reg')
    } else {
      console.log('login')
    }
    window.location.reload()
  }
  handleCancel = () => {
    this.setState({
      visible: false,
      type: ''
    })
  }
  render() { 
    const {visible, type} = this.state
    console.log(visible)
    return ( 
      <div className='header-help-wrap'>
        <div className='header-help clearfix'>
          <div className='fl help-content'>
            <Link to='/help'>帮助中心-新手指南</Link>
            <span className='ml10'>客服电话：12345678</span>
          </div>
          <div className='fr user-operater'>
            <span className='welcome'>欢迎访问XXX</span>
            <span onClick={() => {this.operate('reg')}} className='reg ml10'>注册</span>
            <span onClick={() => {this.operate('login')}} className='login ml10'>登录</span>
          </div>
        </div>
        {visible && 
          <Operate 
            handleOk={this.handleOk} 
            handleCancel={this.handleCancel} 
            visible={visible} 
            type={type} 
          />
        }
      </div> 
    )
  }
}
 
export default Header;