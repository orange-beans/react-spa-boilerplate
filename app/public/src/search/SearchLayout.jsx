import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class SearchLayout extends Component{
  render() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
}

export default CSSModules(SearchLayout, styles);
