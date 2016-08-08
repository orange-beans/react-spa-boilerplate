import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Home extends Component {
  render() {
    return (
      <h1 styleName='heading'>Welcome to Home page</h1>
    );
  }
}

export default CSSModules(Home, styles);
