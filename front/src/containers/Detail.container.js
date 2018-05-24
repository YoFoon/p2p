import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import DetailComponent from '../components/Detail'

class Detail extends Component{
  render() {
    const id = this.props.match.params.id
    return (
      <DetailComponent id={id} />
    );
  }
}

export default withRouter(Detail);