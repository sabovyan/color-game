import React from 'react';

class Btn extends React.PureComponent {
  render() {
    return (
      <div className={`btn ${this.props.className}`} style={{...this.props.style, backgroundColor: this.props.color}}/>
    )
  }
}

export default Btn;