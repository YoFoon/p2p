import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Simditor from 'simditor';
import './style/index.less'

class Index extends Component {
  componentDidMount () {
    this.editor = new Simditor(Object.assign({}, {
      textarea: ReactDOM.findDOMNode(this.refs.editor),
    }, this.props.opts));

    if (typeof this.props.children === 'string' && this.props.children) {
      this.editor.setValue(this.props.children);
    }

    this.editor.on('valuechanged',() => {
      const value = this.editor.getValue();
      this.props.onChange && this.props.onChange(value)
    })
  }
  componentWillUnmount () {
    this.editor.destroy();
  }
  render() {
    return (
      <div>
        <textarea 
          ref='editor' 
        />
      </div>
    )
  }
}

export default Index