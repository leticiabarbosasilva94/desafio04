import React, { Component } from 'react';

export default class GoStackBook extends Component {
  state = { test: 'Hey' };

  render() {
    const { test } = this.state;
    return <h1>{ test }</h1>;
  }
}
