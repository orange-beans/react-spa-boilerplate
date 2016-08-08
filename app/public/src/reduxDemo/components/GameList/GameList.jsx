import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class GameList extends Component{
  render() {
    return (
      <ul className="user-list">
        <li>StarCraft 2</li>
        <li>DOTA 2</li>
        <li>Rome 2</li>
      </ul>
    );
  }
}

export default CSSModules(GameList, styles);
