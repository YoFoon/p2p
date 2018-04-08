import React from 'react';

import './index.less';

import {
  LeftBarList
} from '../';

class LeftBarLayout extends React.Component{
  render() {
    const item = {
      name: "工单",
      buttonList: [
        {
          name: "我的待办",
          icon: "daiban"
        }
      ]
    };
    return (
      <div className="left-bar">
        <LeftBarList {...item} />
      </div>
    )
  }
}

export default LeftBarLayout;