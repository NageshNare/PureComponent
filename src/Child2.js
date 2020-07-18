/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { PureComponent } from 'react';

class Child2 extends PureComponent {
  render() {
    console.log('I am from Second child');
    return (
      <div>
        <h1>
          my age is:
          {this.props.ag}
        </h1>
      </div>
    );
  }
}

export default Child2;
