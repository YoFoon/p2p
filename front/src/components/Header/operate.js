import React, { Component } from 'react';
import { Modal } from 'antd';
import Reg from './reg'
import Login from './login'

class Operate extends Component {
  render() { 
    const {visible, handleOk, handleCancel, type} = this.props
    return (
      <Modal
        title={type === 'reg' ? '注册' : '登录'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={''}
      >
        {
          type === 'reg' ? 
          <Reg handleOk={handleOk} />
          :
          <Login handleOk={handleOk} />
        }
        
      </Modal>
    )
  }
}
 
export default Operate;