import React, {Component} from 'react';
import {ImageBackground} from 'react-native';

export default class Icon extends Component {
  render() {
    return (
      <ImageBackground
        source={this.props.img}
        style={{
          width: 50,
          height: 50,
        }}
      />
    );
  }
}
