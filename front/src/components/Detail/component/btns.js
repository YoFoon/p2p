import React, { Component } from 'react';
import '../style/btns.less'
import GetType from '../../../utils/getType'

class Btns extends Component {
  render() { 
    const {item} = this.props
    console.log(item)
    let types = item.type ? JSON.parse(item.type) : []
    console.log(types)
    return ( 
      <div className='detail-btns clearfix'>
        <div className='detail-type'>
          {
            types.map( (type, index) => {
              return (
                <span key={index}>{GetType(type)}</span>
              )
            })
          }
        </div>
        <div className='btns'>
          <span className='tiyan'>立即体检</span>
          <span className='submit-info'>提交信息</span>
        </div>
      </div> 
    )
  }
}
 
export default Btns;