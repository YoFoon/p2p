import React, { Component } from 'react';
import {Carousel} from 'antd'

import './style/carousel.less'

import Img1 from '../../assets/images/1.jpg'
import Img2 from '../../assets/images/2.jpg'
import Img3 from '../../assets/images/3.jpg'
import Img4 from '../../assets/images/4.jpg'


class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='carousel-wrap'>
        <Carousel 
          autoplay
          dots={false}
        >
          <img src={Img1} alt=""/>
          <img src={Img2} alt=""/>
          <img src={Img3} alt=""/>
          <img src={Img4} alt=""/>
        </Carousel>
      </div>
     )
  }
}
 
export default CarouselComponent;