import React, { Component } from 'react';
import Header from './header/Header';

export default class GoStackBook extends Component {
  state = { test: 'Hey' };

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
