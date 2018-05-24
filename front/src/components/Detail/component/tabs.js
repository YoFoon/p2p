import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import {
  CompanyDes,
  PlateDes
} from './index'

class TabsWrap extends Component {
  render() { 
    const {item} = this.props
    return ( 
      <div>
        <Tabs type="card">
          <TabPane tab="平台信息" key="1">
            <PlateDes item={item} />
          </TabPane>
          <TabPane tab="企业信息" key="2">
            <CompanyDes item={item} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
 
export default TabsWrap;