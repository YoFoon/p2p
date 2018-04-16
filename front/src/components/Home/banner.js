import React, { Component } from 'react';
import Carousel from './carousel'
import './style/banner.less'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="banner-wrap">
        <ul className="pruduct-into">
          <li>平台介绍</li>
          <li>平台介绍</li>
          <li>平台介绍</li>
        </ul>
        <div className="banner-carousel">
          <Carousel />
        </div>
        <ul className="product-into-right">
          <li className="banner-logo">logo</li>
          <li className="banner-article-wrap">
            <ul className="banner-article">
              <li>新闻1</li>
              <li>新闻2</li>
              <li>新闻3</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
 
export default Banner;