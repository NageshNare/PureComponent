/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';

class Child1 extends PureComponent {
  render() {
    return (
      <div>
        <h1>
          I am
          {this.props.nme}
        </h1>
      </div>
    );
  }
}

export default Child1;
