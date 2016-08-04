import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import { LayoutRow } from '../Layout';

import styles from './styles.css';

class ContentPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LayoutRow>
        <div className="container">
          {this.props.children}
        </div>
      </LayoutRow>
    );
  }
}

export default CSSModules(ContentPage, styles);
