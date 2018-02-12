import React, { Component } from 'react';
import {NavLink as Link } from 'react-router-dom';
import './style/help.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return ( 
      <div className='header-help-wrap'>
        <div className='header-help clearfix'>
          <div className='fl'>
            <Link to='/help'>帮助中心-新手指南</Link>
            <span className='ml10'>客服电话：12345678</span>
          </div>
          <div className='fr'>
            <span>欢迎访问XXX</span>
            <Link to='reg' className='ml10'>注册</Link>
            <Link to='login' className='ml10'>登录</Link>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Header;