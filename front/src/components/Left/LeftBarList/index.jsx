import React from 'react';

import './index.less';

export default class LeftBarList extends React.Component{

  constructor(props) {
      super(props)
  }

  render() {
    const {name, buttonList} = this.props;
    return (
      <div className="left-bar-list">
        <p>{name}</p>
        <ul>
          {
            buttonList.map( (item, index) => {
              return (
                <div key={index}>lala</div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}