import React, { Component } from 'react';
import { Modal } from 'antd';
import Reg from './reg'

class Operate extends Component {
  render() { 
    const {visible, handleOk, handleCancel, type} = this.props
    return (
      <Modal
        title={type === 'ref' ? '注册' : '登录'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={''}
      >
        <Reg />
      </Modal>
    )
  }
}
 
export default Operate;