import React, { Component } from 'react';
import {NavLink as Link } from 'react-router-dom';

import "./style/content.less";

class Header extends Component {
  render() { 
    return ( 
      <div className="header-content-wrap">
        <div className='header-content clearfix'>
          <img src="" alt="logo" className="logo fl" />
          <ul className="nav fl clearfix">
            <li><Link className="link" to='/index'>首页</Link></li>
            <li><Link className="link" to='/list'>投资返利</Link></li>
            <li><Link className="link" to='/tool'>理财工具</Link></li>
            <li><Link className="link" to='/notice'>公告</Link></li>
            <li><Link className="link" to='/about'>关于我们</Link></li>
            <li><Link className="link" to='/user'>用户中心</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
 
export default Header;