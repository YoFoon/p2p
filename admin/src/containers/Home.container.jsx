import React, {Component} from 'react';
import {Button, Input} from 'antd';
// import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header/index';
import Home from '../components/Home/index'

import mapObj from '../utils/map-obj'

import mapToArrey from '../utils/map-array'
import decamelize from '../utils/decamelize'
import preserveCamelCase from '../utils/preserveCamelCase'

// @inject('frameStore', 'appListStore')
// @observer
class HomeWrap extends Component{

  componentDidMount() {
    const newObject = mapObj({foo: 'bar'}, (key, value) => [value, key]);
    console.log(newObject)
    const obj = {
      giorgio: 'Bianchi',
      gino: 'Rossi'
    };
    console.log(mapToArrey(obj, (key, value) => key + ' ' + value));
    console.log(decamelize('aaaBbbCccc'))
    console.log(preserveCamelCase('aaa_bbb_ccc'))
  }

  render() {
    return (
      <div id="Home">
        <Header />
        <Home />
      </div>
    );
  }
}

export default withRouter(HomeWrap);